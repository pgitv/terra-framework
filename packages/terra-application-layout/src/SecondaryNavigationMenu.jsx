import React from 'react';
import PropTypes from 'prop-types';
import NavigationSideMenu from 'terra-navigation-side-menu';

const propTypes = {
  menuItems: PropTypes.array,
  initialSelectedKey: PropTypes.string,
  onChildItemSelection: PropTypes.func,
};

class SecondaryNavigationMenu extends React.Component {
  static buildItemMap(menuItems) {
    const childMap = {};
    menuItems.forEach((item) => {
      childMap[item.key] = item;
    });

    return childMap;
  }

  static buildAncestorMap(menuItems) {
    const ancestorMap = {};
    menuItems.forEach((item) => {
      ancestorMap[item.key] = SecondaryNavigationMenu.findAncestor(item.key, menuItems);
    });

    return ancestorMap;
  }

  static findAncestor(key, menuItems) {
    for (let i = 0, numberOfItems = menuItems.length; i < numberOfItems; i += 1) {
      const item = menuItems[i];
      if (item.childKeys && item.childKeys.indexOf(key) >= 0) {
        return item;
      }
    }
    return undefined;
  }

  static buildSelectionPath(key, ancestorMap) {
    if (ancestorMap[key]) {
      return [...SecondaryNavigationMenu.buildSelectionPath(ancestorMap[key].key, ancestorMap)].concat([key]);
    }

    return [key];
  }

  constructor(props) {
    super(props);

    // const initialSelectedKey = 'about';

    this.itemMap = SecondaryNavigationMenu.buildItemMap(props.menuItems);
    this.ancestorMap = SecondaryNavigationMenu.buildAncestorMap(props.menuItems);

    const initialState = {};
    const selectedItem = this.itemMap[props.initialSelectedKey];
    const parentItem = this.ancestorMap[props.initialSelectedKey];

    if (selectedItem.childKeys && selectedItem.childKeys.length) {
      initialState.selectedMenuKey = selectedItem.key;
      initialState.selectedChildKey = undefined;
    } else if (parentItem) {
      initialState.selectedMenuKey = parentItem.key;
      initialState.selectedChildKey = selectedItem.key;
      initialState.selectionPath = SecondaryNavigationMenu.buildSelectionPath(selectedItem.key, this.ancestorMap);
    }

    this.state = initialState;
  }

  render() {
    const { menuItems, onChildItemSelection } = this.props;
    const {
      selectedMenuKey, selectedChildKey, selectionPath,
    } = this.state;

    return (
      <NavigationSideMenu
        menuItems={menuItems}
        selectedMenuKey={selectedMenuKey}
        selectedChildKey={selectedChildKey}
        onChange={(event, selectionData) => {
          const newChildKey = selectionData.selectedChildKey;
          const newMenuKey = selectionData.selectedMenuKey;

          // If an endpoint has been reached, reset selection path and update.
          if (newChildKey && selectionData.metaData && selectionData.metaData.path) {
            this.setState({
              selectionPath: SecondaryNavigationMenu.buildSelectionPath(newChildKey, this.ancestorMap),
              selectedChildKey: newChildKey,
              selectedMenuKey: newMenuKey,
            }, () => {
              if (onChildItemSelection) {
                onChildItemSelection(newChildKey, selectionData.metaData);
              }
            });

            return;
          }

          if (selectionPath.indexOf(newChildKey) >= 0) {
            this.setState({
              selectedMenuKey: newMenuKey,
              selectedChildKey: newChildKey,
            });
          } else if (selectionPath.indexOf(newMenuKey) >= 0) {
            this.setState({
              selectedMenuKey: newMenuKey,
              selectedChildKey: selectionPath[selectionPath.indexOf(newMenuKey) + 1],
            });
          } else {
            this.setState({
              selectedMenuKey: newMenuKey,
              selectedChildKey: undefined,
            });
          }
        }}
      />
    );
  }
}

SecondaryNavigationMenu.propTypes = propTypes;

export default SecondaryNavigationMenu;
