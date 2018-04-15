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

    this.isHorizontalScrolling = true;

    if (this.horizontalScrollTimeout) {
      clearTimeout(this.horizontalScrollTimeout);
    }

    this.horizontalScrollTimeout = setTimeout(() => {
      this.isHorizontalScrolling = false;
    }, 100);
  }

  handleVerticalScroll(event) {
    if (this.isHorizontalScrolling) {
      event.preventDefault();
      return;
    }

    if (!this.isVerticalScrolling) {
      this.isVerticalScrolling = true;

      this.overflowHeaderContainer.classList.remove(cx('visible'));

      // Firefox has what must be a bug that causes the DataGrid to render its fixed columns
      // incorrectly if the fixedHeaderOverfowContainer is hidden using display:none.
      // This works, but a better solution should be investigated.
      this.fixedHeaderOverfowContainer.classList.add(cx('visible'));
      this.fixedHeaderOverfowContainer.scrollLeft = this.horizontalOverflowContainer.scrollLeft;
    }

    if (this.verticalScrollTimeout) {
      clearTimeout(this.verticalScrollTimeout);
    }

    this.verticalScrollTimeout = setTimeout(() => {
      this.fixedHeaderOverfowContainer.classList.remove(cx('visible'));

      this.overflowHeaderContainer.classList.add(cx('visible'));
      this.overflowHeaderContainer.style.top = `${this.verticalOverflowContainer.scrollTop}px`;

      this.isVerticalScrolling = false;
    }, 100);
  }

  updateWidths(columnKey, widthDelta, minWidth) {
    const columnWidths = Object.assign({}, this.state.columnWidths);
    if (columnWidths[columnKey] + widthDelta < minWidth) {
      columnWidths[columnKey] = minWidth;
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
      <div className={cx(['header-cell', 'selectable'])} style={{ width: `${this.state.columnWidths[columnKey]}px` }} tabIndex="0">
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
        className={cx('fixed-column-header-contaienr')}
        style={{ width: `${fixedColumnWidth}px` }}
      >
        {fixedColumnKeys.map(columnKey => this.renderHeaderCell(columnKey, columns[columnKey], true))}
      </div>
    );
  }

  renderOverflowHeaderRow() {
    const { columns, flexColumnKeys } = this.props;

    return (
      <div className={cx(['row', 'header-row'])}>
        {flexColumnKeys.map((columnKey) => {
          const columnData = columns[columnKey];

          return this.renderHeaderCell(columnKey, columnData, true);
        })}
        <div className={cx('buffer-cell', 'buffer-header-cell')} />
      </div>
    );
  }

  renderStickyHeader() {
    const { columns, flexColumnKeys } = this.props;

    const { fixedColumnWidth } = this.state;

    return (
      <div
        ref={(ref) => { this.fixedHeaderOverfowContainer = ref; }}
        className={cx('vertical-overflow-pinned-header-container')}
        style={{
          transform: `translate3d(${fixedColumnWidth}px, 0, 0)`,
          width: `calc(100% - ${fixedColumnWidth}px`,
        }}
      >
        {flexColumnKeys.map(columnKey => this.renderHeaderCell(columnKey, columns[columnKey], false))}
        <div className={cx('buffer-cell', 'buffer-header-cell')} />
      </div>
    );
  }

  renderContentCell(columnKey, rowData) {
    const { columnWidths } = this.state;

    let content;
    if (rowData.text) {
      content = <DefaultCell text={rowData.text} />;
    } else if (rowData.component) {
      content = rowData.component;
    }

    return (
      <div
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
        fixedColumnRowData.push(row[fixedColumnKey])
      ));

      const flexColumnRowData = [];
      flexColumnKeys.forEach(flexColumnKey => (
        flexColumnRowData.push(row[flexColumnKey])
      ));

      return (
        <div className={cx(['row', { 'stripe-row': index % 2 > 0 }, sizeClass])}>
          <div className={cx(['fixed-column-container', sizeClass])} style={{ width: `${fixedColumnWidth}px` }}>
            {fixedColumnKeys.map(columnKey => this.renderContentCell(columnKey, row[columnKey]))}
          </div>
          {flexColumnKeys.map(columnKey => this.renderContentCell(columnKey, row[columnKey]))}
          <div className={cx('buffer-cell')} />
        </div>
      );
    });
  }

  render() {
    const { fixedColumnWidth } = this.state;

    return (
      <div className={cx('container')}>
        {this.renderFixedColumnHeaderRow()}
        {this.renderStickyHeader()}
        <div
          ref={(ref) => { this.verticalOverflowContainer = ref; }}
          className={cx(['vertical-overflow-container'])}
        >
          <div
            ref={(ref) => { this.horizontalOverflowContainer = ref; }}
            className={cx('horizontal-overflow-container')}
            style={{ marginLeft: `${fixedColumnWidth}px` }}
          >
            <div
              ref={(ref) => { this.overflowHeaderContainer = ref; }}
              className={cx('overflow-header-container', 'visible')}
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
