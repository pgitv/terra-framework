import React from 'react';
import classNames from 'classnames/bind';
import Aggregator from 'terra-aggregator';
import SlidePanelManager from 'terra-slide-panel-manager';
import DisclosureComponent from 'terra-disclosure-manager/examples/index-examples/DisclosureComponent';

import DataGrid from '../../src/DataGrid';

import styles from './DataGridStandard.scss';

const cx = classNames.bind(styles);

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

class DataGridStandard extends React.Component {
  constructor(props) {
    super(props);

    this.handleCellClick = this.handleCellClick.bind(this);

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

    this.state = {
      columns,
      rows: generateRows(30),
      fixedColumnKeys: ['column0', 'column1', 'column7'],
      flexColumnKeys: ['column2', 'column3', 'column4', 'column5', 'column6'],
    };
  }

  shouldComponentUpdate(nextProps) {
    const { aggregatorDelegate } = this.props;

    const currentSelectedCell = aggregatorDelegate && aggregatorDelegate.hasFocus ? aggregatorDelegate.itemState.selectedCell : undefined;
    const nextSelectedCell = nextProps.aggregatorDelegate && nextProps.aggregatorDelegate.hasFocus ? nextProps.aggregatorDelegate.itemState.selectedCell : undefined;

    if (currentSelectedCell) {
      if (!nextSelectedCell) {
        return true;
      } else if (nextSelectedCell.rowKey !== currentSelectedCell.rowKey && nextSelectedCell.columnKey !== currentSelectedCell.columnKey) {
        return true;
      }
    } else if (nextSelectedCell) {
      return true;
    }

    return false;
  }

  handleCellClick(rowKey, columnKey) {
    const { aggregatorDelegate } = this.props;
    if (!aggregatorDelegate) {
      return;
    }

    const currentSelectedItem = aggregatorDelegate && aggregatorDelegate.hasFocus ? aggregatorDelegate.itemState.selectedCell : {};
    if (currentSelectedItem.rowKey === rowKey && currentSelectedItem.columnKey === columnKey) {
      aggregatorDelegate.releaseFocus();
    } else {
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
    }
  }

  render() {
    const { aggregatorDelegate } = this.props;
    const { columns, rows, flexColumnKeys, fixedColumnKeys } = this.state;

    let selectedCells;
    if (aggregatorDelegate && aggregatorDelegate.hasFocus) {
      selectedCells = [aggregatorDelegate.itemState.selectedCell];
    }

    return (
      <DataGrid
        fixedColumnKeys={fixedColumnKeys}
        flexColumnKeys={flexColumnKeys}
        columns={columns}
        rows={rows}
        sizeClass={cx('small-rows')}
        selectedCells={selectedCells}
        onClick={this.handleCellClick}
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
    <SlidePanelManager
      panelBehavior="squish"
    >
      <AggregatorWrapper />
    </SlidePanelManager>
  </div>
);

export default SlidePanelManagerWrapper;
