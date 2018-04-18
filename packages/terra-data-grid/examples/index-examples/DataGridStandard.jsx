import React from 'react';
import classNames from 'classnames/bind';
import Aggregator from 'terra-aggregator';
import SlidePanelManager from 'terra-slide-panel-manager';

import DataGrid from '../../src/DataGrid';

import styles from './DataGridStandard.scss';

const cx = classNames.bind(styles);

// import MainFile from 'data-grid/dev/MainFile';
// import 'data-grid/node_modules/MPageFusion/dist/css/mpage-fusion.css';
// import 'data-grid/dist/css/DataGrid.css';

const DisclosureComponent = ({ app }) => (
  <div>
    <h2>Example Disclosure</h2>
    {app && app.dismiss ? <button onClick={() => { app.dismiss(); }}>Dismiss</button> : null}
  </div>
);

class DataGridStandard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // const mainContainer = new MainFile();
    // mainContainer.mount('data-grid-test').update();
  }

  render() {
    const { aggregatorDelegate } = this.props;

    let selectedCells;
    if (aggregatorDelegate && aggregatorDelegate.hasFocus && aggregatorDelegate.itemState && aggregatorDelegate.itemState.selectedCell) {
      selectedCells = [aggregatorDelegate.itemState.selectedCell];
    }

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
      <DataGrid
        fixedColumnKeys={['column0', 'column1', 'column7']}
        flexColumnKeys={['column2', 'column3', 'column4', 'column5', 'column6']}
        columns={columns}
        rows={rows}
        sizeClass={cx('small-rows')}
        selectedCells={selectedCells}
        onClick={(rowKey, columnKey) => {
          aggregatorDelegate.requestFocus({
            selectedCell: {
              rowKey,
              columnKey,
            },
          }).then(({ disclose }) => {
            disclose({
              preferredType: 'panel',
              size: 'small',
              content: {
                key: 'worklist-disclose',
                component: <DisclosureComponent />,
              },
            });
          });
        }}
      />
    );
  }
}

const AggregatorWrapper = props => (
  <Aggregator
    items={[{
      key: 'Worklist',
      component: (
        <DataGridStandard />
        ),
    }]}
    disclose={props.app.disclose}
    render={renderData => (
      <div style={{ height: '500px' }}>
        {renderData.items}
      </div>
      )
    }
  />
);

const SlidePanelManagerWrapper = () => (
  <div style={{ height: '500px' }}>
    <SlidePanelManager>
      <AggregatorWrapper />
    </SlidePanelManager>
  </div>
);

export default SlidePanelManagerWrapper;
