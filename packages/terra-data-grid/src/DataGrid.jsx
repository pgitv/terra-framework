import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// import ContentContainer from 'terra-content-container';
import Draggable from 'react-draggable';

import styles from './DataGrid.scss';

const cx = classNames.bind(styles);

const propTypes = {
  test: PropTypes.string,
};

const CustomCell = ({ text }) => (
  <div className={cx('custom-cell')}>
    {text}
  </div>
);

class DataGrid extends React.Component {
  constructor(props) {
    super(props);

    this.updateWidths = this.updateWidths.bind(this);

    const fixedColumnWidth = props.fixedColumnKeys.map(key => props.columns[key].startWidth).reduce((totalWidth, width) => totalWidth + width);

    const columnWidths = {};
    Object.keys(props.columns).forEach((columnKey) => {
      columnWidths[columnKey] = props.columns[columnKey].startWidth;
    });

    this.state = {
      fixedColumnWidth,
      columnWidths,
    };
  }

  // componentDidMount() {
  //   this.updateWidths();
  // }

  updateWidths(columnKey, widthDelta) {
    const columnWidths = Object.assign({}, this.state.columnWidths);
    columnWidths[columnKey] += widthDelta;

    const fixedColumnWidth = this.props.fixedColumnKeys.map(key => columnWidths[key]).reduce((totalWidth, width) => totalWidth + width);

    this.setState({
      fixedColumnWidth,
      columnWidths,
    });
  }

  render() {
    const { columns, rows, fixedColumnKeys, flexColumnKeys, rowSize } = this.props;

    const fixedColumnWidth = this.state.fixedColumnWidth;

    const headerRow = (
      <div className={cx(['row', 'header-row'])}>
        <div className={cx(['fixed-column-container'])} style={{ width: `${fixedColumnWidth}px` }}>
          {fixedColumnKeys.map((columnKey) => {
            const columnData = columns[columnKey];

            return (
              <div className={cx(['header-cell', 'selectable'])} style={{ width: `${this.state.columnWidths[columnKey]}px` }} tabIndex="0">
                <CustomCell text={columnData.title} />
                <Draggable
                  axis="x"
                  position={{ x: 0 }}
                  grid={[15, 0]}
                  defaultClassNameDragging={cx('react-draggable-dragging')}
                  handle=".drag-handle"
                  onStop={(event, data) => {
                    this.updateWidths(columnKey, data.x);
                  }}
                >
                  <div className={cx(['drag-header', 'drag-handle'])} />
                </Draggable>
              </div>
            );
          })}
        </div>
        {flexColumnKeys.map((columnKey) => {
          const columnData = columns[columnKey];

          return (
            <div className={cx(['header-cell', 'selectable'])} style={{ width: `${this.state.columnWidths[columnKey]}px` }} tabIndex="0">
              <CustomCell text={columnData.title} />
              <Draggable
                axis="x"
                position={{ x: 0 }}
                grid={[15, 0]}
                defaultClassNameDragging={cx('react-draggable-dragging')}
                handle=".drag-handle"
                onDrag={(event, data) => {
                  this.updateWidths(columnKey, data.deltaX);
                }}
              >
                <div className={cx(['drag-header', 'drag-handle'])} />
              </Draggable>
            </div>
          );
        })}
      </div>
    );

    const contentRows = rows.map((row, index) => {
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
        </div>
      );
    });

    return (
      <div className={cx(['container'])}>
        <div ref={(contentWrapper) => { this.contentWrapper = contentWrapper; }} className={cx(['wrapper'])} style={{ marginLeft: `${fixedColumnWidth}px` }}>
          {headerRow}
          {contentRows}
        </div>
      </div>
    );
  }
}

DataGrid.propTypes = propTypes;

export default DataGrid;
