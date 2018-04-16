import React from 'react';
import classNames from 'classnames/bind';

import DataGrid from '../../src/DataGrid';

import styles from './DataGridStandard.scss';

const cx = classNames.bind(styles);

// import MainFile from 'data-grid/dev/MainFile';
// import 'data-grid/node_modules/MPageFusion/dist/css/mpage-fusion.css';
// import 'data-grid/dist/css/DataGrid.css';

class DataGridStandard extends React.Component {
  componentDidMount() {
    // const mainContainer = new MainFile();
    // mainContainer.mount('data-grid-test').update();
  }

  render() {
    const columns = {
      column0: {
        startWidth: 200,
        minWidth: 100,
        sortable: true,               // Not implemented yet
        sortDirection: 'ascending',   // Not implemented yet
        sortWeight: 'primary',        // Not implemented yet
        resize: true,
        component: <div>Custom Header Component</div>,
      },
      column1: {
        startWidth: 100,
        sortable: true,
        sortDirection: 'ascending',
        sortWeight: 'primary',
        resize: true,
        text: 'Column 1',
      },
      column2: {
        startWidth: 300,
        sortable: true,
        sortDirection: 'ascending',
        sortWeight: 'primary',
        resize: true,
        text: 'Column 2',
      },
      column3: {
        startWidth: 400,
        sortable: true,
        sortDirection: 'ascending',
        sortWeight: 'primary',
        resize: true,
        text: 'Column 3',
      },
      column4: {
        startWidth: 400,
        sortable: true,
        sortDirection: 'ascending',
        sortWeight: 'primary',
        resize: true,
        text: 'Column 4',
      },
      column5: {
        startWidth: 400,
        sortable: true,
        sortDirection: 'ascending',
        sortWeight: 'primary',
        resize: true,
        text: 'Column 5',
      },
      column6: {
        startWidth: 400,
        sortable: true,
        sortDirection: 'ascending',
        sortWeight: 'primary',
        resize: true,
        text: 'Column 6',
      },
      column7: {
        startWidth: 400,
        sortable: true,
        sortDirection: 'ascending',
        sortWeight: 'primary',
        resize: true,
        text: 'Column 7',
      },
    };

    const generateRows = num => (new Array(num)).fill().map((val, index) => (
      {
        key: `Row${index}`,
        data: {
          column0: {
            component: <div>Custom Content Component</div>,
          },
          column1: {
            text: `Row ${index} Column 1`,
          },
          column2: {
            text: `Row ${index} Column 2`,
          },
          column3: {
            text: `Row ${index} Column 3`,
          },
          column4: {
            text: `Row ${index} Column 4`,
          },
          column5: {
            text: `Row ${index} Column 5`,
          },
          column6: {
            text: `Row ${index} Column 6`,
          },
          column7: {
            text: `Row ${index} Column 7`,
          },
        },
      }
    ));

    const rows = generateRows(30);

    return (
      <div>
        <div style={{ height: '500px' }}>
          <DataGrid
            columns={columns}
            fixedColumnKeys={['column0', 'column1', 'column7']}
            flexColumnKeys={['column2', 'column3', 'column4', 'column5', 'column6']}
            rows={rows}
            sizeClass={cx('small-rows')}
          />
        </div>
        <br />
        <br />
        <br />
        <div id="data-grid-test" />
      </div>
    );
  }
}


export default DataGridStandard;
