import React from 'react';

import MainFile from 'data-grid/dev/MainFile';

import DataGrid from '../../src/DataGrid';

import 'data-grid/node_modules/MPageFusion/dist/css/mpage-fusion.css';
import 'data-grid/dist/css/DataGrid.css';

class DataGridStandard extends React.Component {
  componentDidMount() {
    const mainContainer = new MainFile();
    mainContainer.mount('data-grid-test').update();
  }

  render() {
    const columns = {
      column0: {
        startWidth: 200,
        sortable: true,
        sortDirection: 'ascending', // 'descending'
        sortWeight: 'primary', // 'secondary', 'tertiary'
        resize: true,
        title: 'Column 0',
        component: <div>Column 0</div>,
      },
      column1: {
        startWidth: 100,
        sortable: true,
        sortDirection: 'ascending', // 'descending'
        sortWeight: 'primary', // 'secondary', 'tertiary'
        resize: true,
        title: 'Column 1',
        component: <div>Column 1</div>,
      },
      column2: {
        startWidth: 300,
        sortable: true,
        sortDirection: 'ascending', // 'descending'
        sortWeight: 'primary', // 'secondary', 'tertiary'
        resize: true,
        title: 'Column 2',
        component: <div>Column 2</div>,
      },
      column3: {
        startWidth: 400,
        sortable: true,
        sortDirection: 'ascending', // 'descending'
        sortWeight: 'primary', // 'secondary', 'tertiary'
        resize: true,
        title: 'Column 3',
        component: <div>Column 3</div>,
      },
      column4: {
        startWidth: 400,
        sortable: true,
        sortDirection: 'ascending', // 'descending'
        sortWeight: 'primary', // 'secondary', 'tertiary'
        resize: true,
        title: 'Column 4',
        component: <div>Column 4</div>,
      },
      column5: {
        startWidth: 400,
        sortable: true,
        sortDirection: 'ascending', // 'descending'
        sortWeight: 'primary', // 'secondary', 'tertiary'
        resize: true,
        title: 'Column 5',
        component: <div>Column 5</div>,
      },
      column6: {
        startWidth: 400,
        sortable: true,
        sortDirection: 'ascending', // 'descending'
        sortWeight: 'primary', // 'secondary', 'tertiary'
        resize: true,
        title: 'Column 6',
        component: <div>Column 6</div>,
      },
      column7: {
        startWidth: 400,
        sortable: true,
        sortDirection: 'ascending', // 'descending'
        sortWeight: 'primary', // 'secondary', 'tertiary'
        resize: true,
        title: 'Column 7',
        component: <div>Column 7</div>,
      },
    };

    const generateRows = num => (new Array(num)).fill().map((val, index) => (
      {
        column0: {
          title: `Row ${index} Column 0`,
        },
        column1: {
          title: `Row ${index} Column 1`,
        },
        column2: {
          title: `Row ${index} Column 2`,
        },
        column3: {
          title: `Row ${index} Column 3`,
        },
        column4: {
          title: `Row ${index} Column 4`,
        },
        column5: {
          title: `Row ${index} Column 5`,
        },
        column6: {
          title: `Row ${index} Column 6`,
        },
        column7: {
          title: `Row ${index} Column 7`,
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
            rowSize="33px"
            rows={rows}
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
