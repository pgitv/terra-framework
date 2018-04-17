import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DraggableCore } from 'react-draggable';

import styles from './DataGrid.scss';

const cx = classNames.bind(styles);

const propTypes = {
  fixedColumnKeys: PropTypes.arrayOf(PropTypes.string),
};

const DefaultCell = ({ text }) => (
  <div className={cx('default-cell')}>
    {text}
  </div>
);

class DataGrid extends React.Component {
  static generateWidthState(props) {
    const fixedColumnWidth = props.fixedColumnKeys.map(key => props.columns[key].startWidth).reduce((totalWidth, width) => totalWidth + width);

    const columnWidths = {};
    Object.keys(props.columns).forEach((columnKey) => {
      columnWidths[columnKey] = props.columns[columnKey].startWidth;
    });

    return {
      fixedColumnWidth,
      columnWidths,
    };
  }

  constructor(props) {
    super(props);

    this.updateWidths = this.updateWidths.bind(this);
    this.handleVerticalScroll = this.handleVerticalScroll.bind(this);
    this.handleHorizontalScroll = this.handleHorizontalScroll.bind(this);
    this.renderHeaderCell = this.renderHeaderCell.bind(this);
    this.renderFixedColumnHeaderRow = this.renderFixedColumnHeaderRow.bind(this);
    this.renderOverflowHeaderRow = this.renderOverflowHeaderRow.bind(this);
    this.renderStickyHeader = this.renderStickyHeader.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.renderContentCell = this.renderContentCell.bind(this);

    this.state = DataGrid.generateWidthState(props);
  }

  componentDidMount() {
    this.verticalOverflowContainer.addEventListener('scroll', this.handleVerticalScroll);
    this.horizontalOverflowContainer.addEventListener('scroll', this.handleHorizontalScroll);

    // Need to ensure the overflow header renders at the appropriate position.
    this.overflowHeaderContainer.style.top = `${this.verticalOverflowContainer.scrollTop}px`;
  }

  componentWillReceiveProps(nextProps) {
    this.setState(DataGrid.generateWidthState(nextProps));
  }

  componentWillUnmount() {
    this.verticalOverflowContainer.removeEventListener('scroll', this.handleVerticalScroll);
    this.horizontalOverflowContainer.removeEventListener('scroll', this.handleHorizontalScroll);
  }

  handleHorizontalScroll(event) {
    if (this.isVerticalScrolling) {
      event.preventDefault();
      return;
    }

    // Firefox triggers a scroll event on the horizontal overflow container when the vertical overflow container's overflow style
    // is toggled off and on. We're checking the scroll position here to detect whether or not a scroll actually occurred and abort,
    // lest we loop infiniitely.
    if (this.horizontalScrollLeft === this.horizontalOverflowContainer.scrollLeft) {
      return;
    }

    this.horizontalScrollLeft = this.horizontalOverflowContainer.scrollLeft;

    if (!this.isHorizontalScrolling) {
      this.isHorizontalScrolling = true;

      this.verticalOverflowContainer.style.overflow = 'hidden';
    }

    if (this.horizontalScrollTimeout) {
      clearTimeout(this.horizontalScrollTimeout);
    }

    this.horizontalScrollTimeout = setTimeout(() => {
      this.isHorizontalScrolling = false;
      this.verticalOverflowContainer.style.overflow = '';
    }, 100);
  }

  handleVerticalScroll(event) {
    if (this.isHorizontalScrolling) {
      event.preventDefault();
      return;
    }

    if (!this.isVerticalScrolling) {
      this.isVerticalScrolling = true;

      this.fixedHeaderOverfowContainer.style.visibility = 'visible';
      this.fixedHeaderOverfowContainer.style['z-index'] = '10001';
      this.fixedHeaderOverfowContainer.scrollLeft = this.horizontalOverflowContainer.scrollLeft;

      this.overflowHeaderContainer.style.visibility = 'hidden';

      this.horizontalOverflowContainer.style.overflow = 'hidden';
    }

    if (this.verticalScrollTimeout) {
      clearTimeout(this.verticalScrollTimeout);
    }

    this.verticalScrollTimeout = setTimeout(() => {
      this.isVerticalScrolling = false;

      this.fixedHeaderOverfowContainer.style.visibility = '';
      this.fixedHeaderOverfowContainer.style['z-index'] = '';

      this.overflowHeaderContainer.style.visibility = '';
      this.overflowHeaderContainer.style.top = `${this.verticalOverflowContainer.scrollTop}px`;

      this.horizontalOverflowContainer.style.overflow = '';
    }, 100);
  }

  updateWidths(columnKey, widthDelta, minWidth) {
    const columnWidths = Object.assign({}, this.state.columnWidths);
    const minimumColumnWidth = minWidth || 50;

    if (columnWidths[columnKey] + widthDelta < minimumColumnWidth) {
      columnWidths[columnKey] = minimumColumnWidth;
    } else {
      columnWidths[columnKey] += widthDelta;
    }

    const fixedColumnWidth = this.props.fixedColumnKeys.map(key => columnWidths[key]).reduce((totalWidth, width) => totalWidth + width);

    this.setState({
      fixedColumnWidth,
      columnWidths,
    });
  }

  renderHeaderCell(columnKey, columnData, enableResize) {
    let content;
    if (columnData.text) {
      content = <DefaultCell text={columnData.text} />;
    } else if (columnData.component) {
      content = columnData.component;
    }

    let resizeHandle;
    if (enableResize) {
      resizeHandle = (
        <DraggableCore
          onStart={(event, data) => {
            const node = data.node;

            node.classList.add(cx('react-draggable-dragging'));
            this.scrollPosition = 0;
          }}
          onStop={(event, data) => {
            const node = data.node;

            node.classList.remove(cx('react-draggable-dragging'));
            node.style.transform = '';

            this.updateWidths(columnKey, this.scrollPosition, columnData.minWidth);
          }}
          onDrag={(event, data) => {
            const node = data.node;

            this.scrollPosition += data.deltaX;
            node.style.transform = `translate3d(${this.scrollPosition}px, 0, 0)`;
          }}
        >
          <div className={cx('drag-region')}>
            <div className={cx('inner-drag')} />
          </div>
        </DraggableCore>
      );
    }

    return (
      <div key={columnKey} className={cx(['cell', 'header-cell', 'selectable'])} style={{ width: `${this.state.columnWidths[columnKey]}px` }} tabIndex="0">
        {content}
        {resizeHandle}
      </div>
    );
  }

  renderFixedColumnHeaderRow() {
    const { columns, fixedColumnKeys } = this.props;
    const fixedColumnWidth = this.state.fixedColumnWidth;

    return (
      <div
        className={cx('fixed-column-header-container')}
        style={{ width: `${fixedColumnWidth}px` }}
      >
        <div className={cx(['row', 'header-row'])}>
          {fixedColumnKeys.map(columnKey => this.renderHeaderCell(columnKey, columns[columnKey], true))}
        </div>
      </div>
    );
  }

  renderOverflowHeaderRow() {
    const { columns, flexColumnKeys } = this.props;

    return (
      <div className={cx(['row', 'header-row'])}>
        {flexColumnKeys.map(columnKey => this.renderHeaderCell(columnKey, columns[columnKey], true))}
        <div className={cx('buffer-cell')} />
      </div>
    );
  }

  renderStickyHeader() {
    const { columns, flexColumnKeys } = this.props;

    const { fixedColumnWidth } = this.state;

    const fixedHeaderOverfowContainerProps = {
      className: cx(['vertical-overflow-pinned-header-container']),
      style: {
        transform: `translate3d(${fixedColumnWidth}px, 0, 0)`,
        width: `calc(100% - ${fixedColumnWidth}px`,
      },
    };

    return (
      <div
        ref={(ref) => { this.fixedHeaderOverfowContainer = ref; }}
        {...fixedHeaderOverfowContainerProps}
      >
        {flexColumnKeys.map(columnKey => this.renderHeaderCell(columnKey, columns[columnKey], false))}
        <div className={cx('buffer-cell')} />
      </div>
    );
  }

  renderContentCell(columnKey, rowKey, rowData) {
    const { columnWidths } = this.state;

    let content;
    if (rowData.text) {
      content = <DefaultCell text={rowData.text} />;
    } else if (rowData.component) {
      content = rowData.component;
    }

    return (
      <div
        key={`${rowKey} - ${columnKey}`}
        className={cx(['cell', 'selectable'])}
        style={{ width: `${columnWidths[columnKey]}px` }}
        tabIndex="0"
      >
        {content}
      </div>
    );
  }

  renderContent() {
    const { rows, fixedColumnKeys, flexColumnKeys, sizeClass } = this.props;

    const { fixedColumnWidth } = this.state;

    return rows.map((row, index) => {
      const fixedColumnRowData = [];
      fixedColumnKeys.forEach(fixedColumnKey => (
        fixedColumnRowData.push(row.data[fixedColumnKey])
      ));

      const flexColumnRowData = [];
      flexColumnKeys.forEach(flexColumnKey => (
        flexColumnRowData.push(row.data[flexColumnKey])
      ));

      return (
        <div key={row.key} className={cx(['row', { 'stripe-row': index % 2 > 0 }, sizeClass])}>
          <div className={cx(['fixed-column-container', sizeClass])} style={{ width: `${fixedColumnWidth}px` }}>
            {fixedColumnKeys.map(columnKey => this.renderContentCell(columnKey, row.key, row.data[columnKey]))}
          </div>
          {flexColumnKeys.map(columnKey => this.renderContentCell(columnKey, row.key, row.data[columnKey]))}
          <div className={cx('buffer-cell')} />
        </div>
      );
    });
  }

  render() {
    const { fixedColumnWidth } = this.state;

    const verticalOverflowContainerProps = {
      className: cx(['vertical-overflow-container']),
    };

    const horizontalOverflowContainerProps = {
      className: cx(['horizontal-overflow-container']),
      style: {
        marginLeft: `${fixedColumnWidth}px`,
      },
    };

    const overflowHeaderContainerProps = {
      className: cx(['overflow-header-container']),
    };

    return (
      <div className={cx('container')}>
        {this.renderFixedColumnHeaderRow()}
        {this.renderStickyHeader()}
        <div
          ref={(ref) => { this.verticalOverflowContainer = ref; }}
          {...verticalOverflowContainerProps}
        >
          <div
            ref={(ref) => { this.horizontalOverflowContainer = ref; }}
            {...horizontalOverflowContainerProps}
          >
            <div
              ref={(ref) => { this.overflowHeaderContainer = ref; }}
              {...overflowHeaderContainerProps}
            >
              {this.renderOverflowHeaderRow()}
            </div>
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

DataGrid.propTypes = propTypes;

export default DataGrid;
