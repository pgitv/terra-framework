import React from 'react';
import classNames from 'classnames/bind';

import styles from './example-styles.scss';

import Connections from './connections';

const cx = classNames.bind(styles);


const ModalManagerExample = () => (
  <div className={cx('example-wrapper')}>
    <Connections />
  </div>
);

export default ModalManagerExample;
