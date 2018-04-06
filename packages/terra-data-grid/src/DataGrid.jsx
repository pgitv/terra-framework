import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';

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

// const Row = ({ name, columnCount }) => (
//   <div className={cx(['row'])}>
//     {(new Array(columnCount)).fill().map((derp, index) => index === 0 ? (
//       <div className={cx(['cell', 'start-cell'])}><CustomCell text={name} /></div>
//     ) : (
//       <div className={cx('cell')}><CustomCell text={`Cell ${index} skdfj;a lskdjf;alkjsdf;lajk sd;fljk as;dljf a;lsdkj f;alksj df;lajk sdf;lajk sdf`} /></div>
//     ))}
//   </div>
// );

// const HeaderRow = ({ name, columnCount }) => (
//   <div className={cx(['row', 'header-row'])}>
//     {(new Array(columnCount)).fill().map((derp, index) => index === 0 ? (
//       <div className={cx(['header-cell', 'start-cell'])}><CustomCell text={name} /></div>
//     ) : (
//       <div className={cx('header-cell')}><CustomCell text={`Cell ${index}`} /></div>
//     ))}
//   </div>
// );

// const SectionHeader = () => (
//   <div className={cx('section-header')}>
//     <div className={cx('section-header-fixed')}>
//       Section Header that is long long long long long long long long long long long long long long long long long long long long long
//     </div>
//   </div>
// );

// const rowSet = (num) => {
//   const rows = [];
//   for (let i = 0; i < num; i += 1) {
//     rows.push((
//       <Row name={`Row ${i}`} columnCount={100} />
//     ));
//   }
//   return rows;
// };

class DataGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
  }


  render() {
    const { columns, rows, fixedColumnKeys, flexColumnKeys, rowSize } = this.props;

    const fixedColumnWidth = fixedColumnKeys.map(key => columns[key].startWidth).reduce((totalWidth, width) => totalWidth + width);

    const headerRow = (
      <div className={cx(['row', 'header-row'])}>
        <div className={cx(['fixed-column-container'])} style={{ width: `${fixedColumnWidth}px` }}>
          {fixedColumnKeys.map((columnKey) => {
            const columnData = columns[columnKey];

            return (
              <div className={cx(['header-cell'])} style={{ width: columnData.startWidth }}>
                <CustomCell text={columnData.title} />
              </div>
            );
          })}
        </div>
        {flexColumnKeys.map((columnKey) => {
          const columnData = columns[columnKey];

          return (
            <div className={cx(['header-cell'])} style={{ width: columnData.startWidth }}>
              <CustomCell text={columnData.title} />
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
                <div className={cx(['cell'])} style={{ width: columnData.startWidth }}>
                  <CustomCell text={rowData.title} />
                </div>
              );
            })}
          </div>
          {flexColumnKeys.map((columnKey) => {
            const columnData = columns[columnKey];
            const rowData = row[columnKey];

            return (
              <div className={cx(['cell'])} style={{ width: columnData.startWidth }}>
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
