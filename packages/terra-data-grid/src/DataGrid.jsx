import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './DataGrid.scss';

const cx = classNames.bind(styles);

const propTypes = {
  test: PropTypes.string,
};

const Column = ({ name, cellCount }) => (
  <div className={cx('column')}>
    {(new Array(cellCount)).fill().map((derp, index) => index === 0 ? (
      <div className={cx('header-cell')}>{name}</div>
    ) : (
      <div className={cx('cell')}>Cell {index}</div>
    ))}
  </div>
);

const columnSet = (num) => {
  const columns = [];
  for (let i = 0; i < num; i += 1) {
    columns.push((
      <Column name={`Column ${i}`} cellCount={1000} />
    ));
  }
  return columns;
};

class DataGrid extends React.Component {
  constructor(props) {
    super(props);

    this.updateRefs = this.updateRefs.bind(this);

    this.state = {

    };
  }

  componentDidMount() {
    this.updateRefs();
  }

  updateRefs() {
    if (this.fixedRef) {
      this.fixedRef.style.height = `${this.fixedRef.scrollHeight}px`;

      if (this.filledRef) {
        this.filledRef.style.height = `${this.fixedRef.scrollHeight}px`;
      }
    }
  }

  componentDidUpdate() {
    this.updateRefs();
  }

  render() {
    return (
      <div className={cx(['container', 'container-size-1'])}>
        <div ref={(fixedRef) => { this.fixedRef = fixedRef; }} className={cx('fixed')}>
          {columnSet(3)}
        </div>
        <div ref={(filledRef) => { this.filledRef = filledRef; }} className={cx('fill')}>
          {columnSet(30)}
        </div>
      </div>
    );
  }
}

DataGrid.propTypes = propTypes;

export default DataGrid;
