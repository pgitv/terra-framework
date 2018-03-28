import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './DataGrid.scss';

const cx = classNames.bind(styles);

const propTypes = {
  test: PropTypes.string,
};

class DataGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className={cx('container')}>
        <div className={cx('fixed')}>
          <div className={cx('column')}>
            Column 1
          </div>
          <div className={cx('column')}>
            Column 2
          </div>
        </div>
        <div className={cx('fill')}>
          <div className={cx('column')}>
            Column 3
          </div>
          <div className={cx('column')}>
            Column 4
          </div>
          <div className={cx('column')}>
            Column 5
          </div>
        </div>
      </div>
    );
  }
}

DataGrid.propTypes = propTypes;

export default DataGrid;
