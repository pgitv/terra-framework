import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DraggableCore } from 'react-draggable';

import styles from './DataGrid.scss';

const cx = classNames.bind(styles);

const propTypes = {
  fixedColumnKeys: PropTypes.arrayOf(PropTypes.string),
};

const CustomCell = ({ text }) => (
  <div className={cx('custom-cell')}>
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
    this.renderFixedHeaderRow = this.renderFixedHeaderRow.bind(this);
    this.renderOverflowHeaderRow = this.renderOverflowHeaderRow.bind(this);
    this.renderStickyHeader = this.renderStickyHeader.bind(this);
    this.renderContent = this.renderContent.bind(this);

    const fixedColumnWidth = props.fixedColumnKeys.map(key => props.columns[key].startWidth).reduce((totalWidth, width) => totalWidth + width);

    const columnWidths = {};
    Object.keys(props.columns).forEach((columnKey) => {
      columnWidths[columnKey] = props.columns[columnKey].startWidth;
    });

    this.state = DataGrid.generateWidthState(props);
  }

  componentDidMount() {
    this.verticalOverflowContainer.addEventListener('scroll', this.handleVerticalScroll);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(DataGrid.generateWidthState(nextProps));
  }

  componentWillUnmount() {
    this.verticalOverflowContainer.removeEventListener('scroll', this.handleVerticalScroll);
  }

  handleVerticalScroll() {
    if (!this.isVerticalScrolling) {
      this.isVerticalScrolling = true;

      this.overflowHeaderContainer.style.visibility = 'hidden';

      this.fixedHeaderOverfowContainer.style.visibility = 'visible';
      this.fixedHeaderOverfowContainer.style.height = '';
      this.fixedHeaderOverfowContainer.scrollLeft = this.horizontalOverflowContainer.scrollLeft;
    }

    if (this.verticalScrollTimeout) {
      clearTimeout(this.verticalScrollTimeout);
    }

    this.verticalScrollTimeout = setTimeout(() => {
      this.fixedHeaderOverfowContainer.style.visibility = 'hidden';
      this.fixedHeaderOverfowContainer.style.height = '0px';

      this.overflowHeaderContainer.style.visibility = 'visible';
      this.overflowHeaderContainer.style.position = 'relative';
      this.overflowHeaderContainer.style.top = `${this.verticalOverflowContainer.scrollTop}px`;

      this.isVerticalScrolling = false;
    }, 100);
  }

  updateWidths(columnKey, widthDelta) {
    const columnWidths = Object.assign({}, this.state.columnWidths);
    if (columnWidths[columnKey] + widthDelta < 50) {
      columnWidths[columnKey] = 50;
    } else {
      columnWidths[columnKey] += widthDelta;
    }

    const fixedColumnWidth = this.props.fixedColumnKeys.map(key => columnWidths[key]).reduce((totalWidth, width) => totalWidth + width);

    this.setState({
      fixedColumnWidth,
      columnWidths,
    });
  }

  renderFixedHeaderRow() {
    const { columns, rows, fixedColumnKeys, flexColumnKeys, rowSize } = this.props;
    const fixedColumnWidth = this.state.fixedColumnWidth;

    return (
      <div style={{ position: 'absolute', left: '0', top: '0', width: `${fixedColumnWidth}px`, display: 'flex', zIndex: '10000', borderBottom: '1px solid grey' }}>
        {fixedColumnKeys.map((columnKey) => {
          const columnData = columns[columnKey];

          return (
            <div className={cx(['header-cell', 'selectable'])} style={{ width: `${this.state.columnWidths[columnKey]}px` }} tabIndex="0">
              <CustomCell text={columnData.title} />
              <DraggableCore
                handle=".drag-handle"
                onStart={(event, data) => {
                  data.node.classList.add(cx('react-draggable-dragging'));
                  this.scrollPosition = 0;
                }}
                onStop={(event, data) => {
                  data.node.classList.remove(cx('react-draggable-dragging'));
                  data.node.style.transform = '';
                  this.updateWidths(columnKey, this.scrollPosition);
                }}
                onDrag={(event, data) => {
                  this.scrollPosition += data.deltaX;
                  data.node.style.transform = `translate3d(${this.scrollPosition}px, 0, 100px)`;
                }}
              >
                <div className={cx(['drag-header', 'drag-handle'])}>
                  <div className={cx('inner-drag')} />
                </div>
              </DraggableCore>
            </div>
          );
        })}
      </div>
    );
  }

  renderOverflowHeaderRow() {
    const { columns, rows, fixedColumnKeys, flexColumnKeys, rowSize } = this.props;

    const fixedColumnWidth = this.state.fixedColumnWidth;

    return (
      <div className={cx(['row', 'header-row'])}>
        {flexColumnKeys.map((columnKey) => {
          const columnData = columns[columnKey];

          return (
            <div className={cx(['header-cell', 'selectable'])} style={{ width: `${this.state.columnWidths[columnKey]}px` }} tabIndex="0">
              <CustomCell text={columnData.title} />
              <DraggableCore
                handle=".drag-handle"
                onStart={(event, data) => {
                  data.node.classList.add(cx('react-draggable-dragging'));
                  this.scrollPosition = 0;
                }}
                onStop={(event, data) => {
                  data.node.classList.remove(cx('react-draggable-dragging'));
                  data.node.style.transform = '';
                  this.updateWidths(columnKey, this.scrollPosition);
                }}
                onDrag={(event, data) => {
                  this.scrollPosition += data.deltaX;
                  data.node.style.transform = `translate3d(${this.scrollPosition}px, 0, 100px)`;
                }}
              >
                <div className={cx(['drag-header', 'drag-handle'])}>
                  <div className={cx('inner-drag')} />
                </div>
              </DraggableCore>
            </div>
          );
        })}
        <div className={cx('buffer-cell', 'buffer-header-cell')} />
      </div>
    );
  }

  renderStickyHeader() {
    const { columns, rows, fixedColumnKeys, flexColumnKeys, rowSize } = this.props;

    const fixedColumnWidth = this.state.fixedColumnWidth;

    return (
      <div ref={(ref) => { this.fixedHeaderOverfowContainer = ref; }} style={{ visibility: 'hidden', display: 'flex', height: '0px', position: 'absolute', transform: `translate3d(${fixedColumnWidth}px, 0, 0)`, /* left: `${fixedColumnWidth}px`, */ /* top: '0', */ width: `calc(100% - ${fixedColumnWidth}px`, zIndex: '10000', overflow: 'hidden', borderBottom: '1px solid grey' }}>
        {flexColumnKeys.map((columnKey) => {
          const columnData = columns[columnKey];

          return (
            <div className={cx(['header-cell', 'selectable'])} style={{ width: `${this.state.columnWidths[columnKey]}px` }} tabIndex="0">
              <CustomCell text={columnData.title} />
              <DraggableCore
                handle=".drag-handle"
                onStart={(event, data) => {
                  data.node.classList.add(cx('react-draggable-dragging'));
                  this.scrollPosition = 0;
                }}
                onStop={(event, data) => {
                  data.node.classList.remove(cx('react-draggable-dragging'));
                  data.node.style.transform = '';
                  this.updateWidths(columnKey, this.scrollPosition);
                }}
                onDrag={(event, data) => {
                  this.scrollPosition += data.deltaX;
                  data.node.style.transform = `translate3d(${this.scrollPosition}px, 0, 100px)`;
                }}
              >
                <div className={cx(['drag-header', 'drag-handle'])}>
                  <div className={cx('inner-drag')} />
                </div>
              </DraggableCore>
            </div>
          );
        })}
        <div className={cx('buffer-cell', 'buffer-header-cell')} />
      </div>
    );
  }

  renderContent() {
    const { columns, rows, fixedColumnKeys, flexColumnKeys, rowSize } = this.props;

    const fixedColumnWidth = this.state.fixedColumnWidth;

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
        <div className={cx(['row', { 'stripe-row': index % 2 > 0 }])}>
          <div className={cx(['fixed-column-container'])} style={{ width: `${fixedColumnWidth}px` }}>
            {fixedColumnKeys.map((columnKey) => {
              const columnData = columns[columnKey];
              const rowData = row[columnKey];

              return (
                <div className={cx(['cell', 'selectable'])} style={{ width: `${this.state.columnWidths[columnKey]}px` }} tabIndex="0">
                  <CustomCell text={rowData.title} />
                </div>
              );
            })}
          </div>
          {flexColumnKeys.map((columnKey) => {
            const columnData = columns[columnKey];
            const rowData = row[columnKey];

            return (
              <div className={cx(['cell', 'selectable'])} style={{ width: `${this.state.columnWidths[columnKey]}px` }} tabIndex="0">
                <CustomCell text={rowData.title} />
              </div>
            );
          })}
          <div className={cx('buffer-cell')} />
        </div>
      );
    });
  }

  render() {
    const { columns, rows, fixedColumnKeys, flexColumnKeys, rowSize } = this.props;

    const fixedColumnWidth = this.state.fixedColumnWidth;

    return (
      <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
        {this.renderFixedHeaderRow()}
        {this.renderStickyHeader()}
        <div ref={(ref) => { this.verticalOverflowContainer = ref; }} className={cx(['container'])}>
          <div ref={(ref) => { this.horizontalOverflowContainer = ref; }} className={cx(['wrapper'])} style={{ marginLeft: `${fixedColumnWidth}px` }}>
            <div ref={(ref) => { this.overflowHeaderContainer = ref; }}>
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
