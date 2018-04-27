import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DraggableCore } from 'react-draggable';

import styles from './DataGrid.scss';

const cx = classNames.bind(styles);

const propTypes = {
  fixedColumnKeys: PropTypes.arrayOf(PropTypes.string),
  flexColumnKeys: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  fixedColumnKeys: [],
  flexColumnKeys: [],
};

const DefaultCell = ({ text }) => (
  <div className={cx('default-cell')}>
    {text}
  </div>
);

class DataGrid extends React.Component {
  static generateWidthState(props) {
    const fixedColumnWidth = props.fixedColumnKeys.length ?
      props.fixedColumnKeys.map(key => props.columns[key].startWidth).reduce((totalWidth, width) => totalWidth + width) : 0;

    const flexColumnWidth = props.flexColumnKeys.length ?
      props.flexColumnKeys.map(key => props.columns[key].startWidth).reduce((totalWidth, width) => totalWidth + width) + 150 : 150;

    const columnWidths = {};
    Object.keys(props.columns).forEach((columnKey) => {
      columnWidths[columnKey] = props.columns[columnKey].startWidth;
    });

    return {
      fixedColumnWidth,
      flexColumnWidth,
      columnWidths,
    };
  }

  static buildSelectionMap(selectionArray) {
    const selectionMap = {};
    if (!selectionArray) {
      return {};
    }

    selectionArray.forEach((selection) => {
      if (!selection.rowKey || !selection.columnKey) {
        return;
      }

      if (!selectionMap[selection.rowKey]) {
        selectionMap[selection.rowKey] = {};
      }

      selectionMap[selection.rowKey][selection.columnKey] = true;
    });

    return selectionMap;
  }

  constructor(props) {
    super(props);

    this.updateWidths = this.updateWidths.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);

    this.renderHeaderCell = this.renderHeaderCell.bind(this);
    this.renderFixedHeaderRow = this.renderFixedHeaderRow.bind(this);
    this.renderOverflowHeaderRow = this.renderOverflowHeaderRow.bind(this);
    this.renderOverflowContent = this.renderOverflowContent.bind(this);
    this.renderFixedContent = this.renderFixedContent.bind(this);
    this.renderContentCell = this.renderContentCell.bind(this);

    this.state = Object.assign({}, DataGrid.generateWidthState(props), {
      selectionMap: DataGrid.buildSelectionMap(props.selectedCells),
    });
  }

  componentWillReceiveProps(nextProps) {
    let newState = {};
    if (this.props.columns !== nextProps.columns) {
      /**
       * The widths are regenerated only if the columns prop has been mutated. This ensures that any temporary column widths
       * are maintained on subsequent renders.
       */
      newState = Object.assign({}, DataGrid.generateWidthState(nextProps));
    }

    if (this.props.selectedCells !== nextProps.selectedCells) {
      newState.selectionMap = DataGrid.buildSelectionMap(nextProps.selectedCells);
    }

    if (Object.keys(newState).length) {
      this.setState(newState);
    }
  }

  updateWidths(columnKey, widthDelta, minWidth) {
    const columnWidths = Object.assign({}, this.state.columnWidths);
    const minimumColumnWidth = minWidth || 50;

    if (columnWidths[columnKey] + widthDelta < minimumColumnWidth) {
      columnWidths[columnKey] = minimumColumnWidth;
    } else {
      columnWidths[columnKey] += widthDelta;
    }

    const fixedColumnWidth = this.props.fixedColumnKeys.length ?
      this.props.fixedColumnKeys.map(key => columnWidths[key]).reduce((totalWidth, width) => totalWidth + width) : 0;

    const flexColumnWidth = this.props.flexColumnKeys.length ?
      this.props.flexColumnKeys.map(key => columnWidths[key]).reduce((totalWidth, width) => totalWidth + width) + 150 : 150;

    this.setState({
      fixedColumnWidth,
      flexColumnWidth,
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
            node.style.height = `${this.containerHeight}px`;

            this.scrollPosition = 0;
          }}
          onStop={(event, data) => {
            const node = data.node;

            node.classList.remove(cx('react-draggable-dragging'));
            node.style.transform = '';
            node.style.height = '';

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
        <div style={{ height: '100%', width: '100%', overflow: 'hidden' }} >
          {content}
        </div>
        {resizeHandle}
      </div>
    );
  }

  renderFixedHeaderRow() {
    const { columns, fixedColumnKeys } = this.props;
    const { fixedColumnWidth, flexColumnWidth } = this.state;

    return (
      <div
        className={cx('fixed-column-header-container')}
        style={{ width: `${fixedColumnWidth}px` }}
      >
        <div className={cx(['row', 'header-row'])} style={{ width: `${fixedColumnWidth}px` }}>
          {fixedColumnKeys.map(columnKey => this.renderHeaderCell(columnKey, columns[columnKey], true))}
        </div>
      </div>
    );
  }

  renderOverflowHeaderRow() {
    const { columns, flexColumnKeys } = this.props;
    const { flexColumnWidth } = this.state;

    return (
      <div className={cx(['row', 'header-row'])} style={{ width: `${flexColumnWidth}px` }}>
        {flexColumnKeys.map(columnKey => this.renderHeaderCell(columnKey, columns[columnKey], true))}
        <div className={cx('buffer-cell')} />
      </div>
    );
  }

  renderContentCell(columnKey, rowKey, rowData) {
    const { columnWidths, selectionMap } = this.state;

    let content;
    if (rowData.text) {
      content = <DefaultCell text={rowData.text} />;
    } else if (rowData.component) {
      content = rowData.component;
    }

    return (
      <div
        onClick={this.handleContentClick}
        key={`${rowKey} - ${columnKey}`}
        className={cx(['cell', { 'no-data': rowData.noData, selectable: rowData.selectable, selected: selectionMap[rowKey] && selectionMap[rowKey][columnKey] }])}
        style={{ width: `${columnWidths[columnKey]}px` }}
        tabIndex={rowData.selectable ? '0' : undefined}
        data-column-key={columnKey}
        data-row-key={rowKey}
      >
        {content}
      </div>
    );
  }

  renderOverflowContent() {
    const { rows, flexColumnKeys, sizeClass } = this.props;

    const { flexColumnWidth } = this.state;

    return rows.map((row, index) => (
      <div key={row.key} className={cx(['row', { 'stripe-row': index % 2 > 0 }, sizeClass])} style={{ width: `${flexColumnWidth}px` }}>
        {flexColumnKeys.map(columnKey => this.renderContentCell(columnKey, row.key, row.data[columnKey]))}
        <div className={cx('buffer-cell')} />
      </div>
    ));
  }

  renderFixedContent() {
    const { rows, fixedColumnKeys, sizeClass } = this.props;

    const { fixedColumnWidth } = this.state;

    return rows.map((row, index) => (
      <div key={row.key} className={cx(['row', { 'stripe-row': index % 2 > 0 }, sizeClass])} style={{ width: `${fixedColumnWidth}px` }}>
        {fixedColumnKeys.map(columnKey => this.renderContentCell(columnKey, row.key, row.data[columnKey]))}
      </div>
    ));
  }

  handleContentClick(event) {
    const { onClick } = this.props;

    const cellNode = event.currentTarget;

    if (!cellNode.classList.contains(cx('cell'))) {
      return;
    }

    if (cellNode.classList.contains(cx('selectable')) && onClick) {
      onClick(cellNode.getAttribute('data-row-key'), cellNode.getAttribute('data-column-key'));
    }
  }

  render() {
    console.log('rendering data grid');

    return (
      <div
        className={cx('container')}
        ref={(ref) => {
          if (ref) {
            this.containerHeight = ref.clientHeight;
          }
        }}
      >
        {this.renderFixedHeaderRow()}
        <div className={cx('overflow-container')}>
          <div className={cx('scroll-header')} style={{ width: `${this.state.flexColumnWidth}px`, marginLeft: `${this.state.fixedColumnWidth}px` }}>
            {this.renderOverflowHeaderRow()}
          </div>
          <div className={cx('fixed-content')} style={{ width: `${this.state.fixedColumnWidth}px` }}>
            {this.renderFixedContent()}
          </div>
          <div
            className={cx('scroll-content')} style={{ width: `${this.state.flexColumnWidth}px`, marginLeft: `${this.state.fixedColumnWidth}px` }}
            ref={(ref) => {
              this.scrollContentRef = ref;
              if (this.scrollContentRef) {
                // Necessary to correct initial rendering bug with Safari.
                // Without this, the sticky headers will scroll away too soon (they are positioned relative to the overflow-container height vs. the
                // overall content height).
                this.scrollContentRef.style.height = `${this.scrollContentRef.scrollHeight}px`;
              }
            }}
          >
            {this.renderOverflowContent()}
          </div>
        </div>
      </div>
    );
  }
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;

export default DataGrid;
