import React from 'react';
import PropTypes from 'prop-types';
import { withActiveBreakpoint } from 'terra-breakpoints';
import SlidePanel from 'terra-slide-panel';

const propTypes = {
  placeholder: PropTypes.element,
  componentMap: PropTypes.object,
  activeComponentKey: PropTypes.string,
  activeBreakpoint: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  placeholder: <div>Placeholder</div>,
};

class ContentLayout extends React.Component {
  static getParentKey(sourceKey, componentMap) {
    const componentKeys = Object.keys(componentMap);
    for (let i = 0, numberOfKeys = componentKeys.length; i < numberOfKeys; i += 1) {
      const componentData = componentMap[componentKeys[i]];

      if (componentData && componentData.descendantKeys) {
        if (componentData.descendantKeys.indexOf(sourceKey) >= 0) {
          return componentKeys[i];
        }
      }
    }

    return undefined;
  }

  render() {
    const {
      componentMap, activeComponentKey, activeBreakpoint, onChange, placeholder,
    } = this.props;

    const componentData = componentMap[activeComponentKey];
    const parentKey = ContentLayout.getParentKey(activeComponentKey, componentMap);

    if (activeBreakpoint === 'tiny' || activeBreakpoint === 'small') {
      return (
        React.cloneElement(componentData.component, {
          contentLayout: {
            goTo: (nextComponentKey) => {
              if (onChange) {
                onChange(nextComponentKey);
              }
            },
            goBack: parentKey ? () => {
              if (onChange) {
                onChange(parentKey);
              }
            } : undefined,
          },
        })
      );
    }

    let menuContent;
    let mainContent;
    if (componentData.descendantKeys) {
      mainContent = placeholder;

      menuContent = React.cloneElement(componentData.component, {
        contentLayout: {
          goTo: (nextComponentKey) => {
            if (onChange) {
              onChange(nextComponentKey);
            }
          },
          goBack: parentKey ? () => {
            if (onChange) {
              onChange(parentKey);
            }
          } : undefined,
        },
      });
    } else {
      mainContent = React.cloneElement(componentMap[activeComponentKey].component, {
        contentLayout: {
          goTo: (nextComponentKey) => {
            if (onChange) {
              onChange(nextComponentKey);
            }
          },
        },
      });

      if (parentKey) {
        const grandparentKey = ContentLayout.getParentKey(parentKey, componentMap);

        menuContent = React.cloneElement(componentMap[parentKey].component, {
          contentLayout: {
            goTo: (nextComponentKey) => {
              if (onChange) {
                onChange(nextComponentKey);
              }
            },
            goBack: grandparentKey ? () => {
              if (onChange) {
                onChange(grandparentKey);
              }
            } : undefined,
          },
        });
      }
    }

    return (
      <SlidePanel
        fill
        isOpen={!!menuContent}
        panelPosition="start"
        panelBehavior="squish"
        mainContent={mainContent}
        panelContent={menuContent}
      />
    );
  }
}

ContentLayout.propTypes = propTypes;
ContentLayout.defaultProps = defaultProps;

export default withActiveBreakpoint(ContentLayout);
