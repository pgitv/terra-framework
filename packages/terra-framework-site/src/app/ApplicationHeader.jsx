import React from 'react';
import PropTypes from 'prop-types';
import Image from 'terra-image';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import Toolbar from 'terra-application-toolbar';
import NavTabs from 'terra-application-toolbar/lib/NavTabs';

const propTypes = {
  layoutConfig: PropTypes.object,
  routeConfig: PropTypes.object,

  locale: PropTypes.string,
  onLocaleChange: PropTypes.func,

  dir: PropTypes.string,
  onDirChange: PropTypes.func,

  theme: PropTypes.string,
  onThemeChange: PropTypes.func,
};

class ApplicationHeader extends React.Component {
  render() {
    const isCompactHeader = (this.props.layoutConfig.size === 'tiny' || this.props.layoutConfig.size === 'small');

    const bidiContent = (
      <Toolbar.Utility.ItemGroup key="site-bidi" isSelectable dir="ltr" size="medium" onChange={this.props.onDirChange}>
        <Toolbar.Utility.Item id="ltr" text="ltr" key="ltr" isSelected={this.props.dir === 'ltr'} />
        <Toolbar.Utility.Item id="rtl" text="rtl" key="rtl" isSelected={this.props.dir === 'rtl'} />
      </Toolbar.Utility.ItemGroup>
    );

    const localeContent = (
      <Toolbar.Utility.Item
        text={`Locale: ${this.props.locale}`}
        key="locale"
        subMenuItems={[
          <Toolbar.Utility.ItemGroup isSelectable key="local-options" onChange={this.props.onLocaleChange} >
            <Toolbar.Utility.Item id="en" text="en" key="en" isSelected={this.props.locale === 'en'} />
            <Toolbar.Utility.Item id="en-GB" text="en-GB" key="en-GB" isSelected={this.props.locale === 'en-GB'} />
            <Toolbar.Utility.Item id="en-US" text="en-US" key="en-US" isSelected={this.props.locale === 'en-US'} />
            <Toolbar.Utility.Item id="de" text="de" key="de" isSelected={this.props.locale === 'de'} />
            <Toolbar.Utility.Item id="es" text="es" key="es" isSelected={this.props.locale === 'es'} />
            <Toolbar.Utility.Item id="fr" text="fr" key="fr" isSelected={this.props.locale === 'fr'} />
            <Toolbar.Utility.Item id="pt" text="pt" key="pt" isSelected={this.props.locale === 'pt'} />
            <Toolbar.Utility.Item id="fi-FI" text="fi-FI" key="fi-FI" isSelected={this.props.locale === 'fi-FI'} />
          </Toolbar.Utility.ItemGroup>,
        ]}
      />
    );

    let themeSwitcher;

    function supportsCSSVars() {
      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');
    }

    if (supportsCSSVars()) {
      themeSwitcher = (
        <Toolbar.Utility.Item
          text={`Theme: ${this.props.theme}`}
          key="theme"
          subMenuItems={[
            <Toolbar.Utility.ItemGroup isSelectable key="theme-options" onChange={this.props.onThemeChange} >
              <Toolbar.Utility.Item id="Default Theme" text="Default Theme" key="default" isSelected={this.props.theme === 'Default Theme'} />
              <Toolbar.Utility.Item id="Consumer Theme" text="Consumer Theme" key="consumer" isSelected={this.props.theme === 'Consumer Theme'} />
              <Toolbar.Utility.Item id="Mock Theme" text="Mock Theme" key="mock" isSelected={this.props.theme === 'Mock Theme'} />
            </Toolbar.Utility.ItemGroup>,
          ]}
        />
      );
    } else {
      themeSwitcher = <div />;
    }

    const utility = (
      <Toolbar.Utility
        accessory={<IconSettings />}
        title={'Utilities'}
        menuItems={[themeSwitcher, localeContent, <Toolbar.Utility.Divider key="DIVIDER-1" />, bidiContent]}
      />
    );

    let navTabs;
    if (this.props.routeConfig.navigation && !isCompactHeader) {
      navTabs = <NavTabs links={this.props.routeConfig.navigation.links} />;
    }

    return (
      <Toolbar
        layoutConfig={this.props.layoutConfig}
        logo={(
          <Toolbar.Logo
            title="Terra"
            subtitle="Framework"
            accessory={<Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />}
          />
        )}
        utility={utility}
        content={navTabs}
      />
    );
  }
}

ApplicationHeader.propTypes = propTypes;

export default ApplicationHeader;
