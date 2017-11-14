import React from 'react';
import Toolbar from 'terra-application-toolbar';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconPill from 'terra-icon/lib/icon/IconPill';
import NavTabs from 'terra-application-toolbar/lib/NavTabs';

class ToolbarStandard extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.getId = this.getId.bind(this);
    this.state = { toolbarSize: 'tiny' };
  }

  getId(name) {
    return name + this.state.id;
  }

  handleSelectChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor={this.getId('toolbarSize')}>Toolbar Size</label>
          <select id={this.getId('toolbarSize')} name="toolbarSize" value={this.state.toolbarSize} onChange={this.handleSelectChange}>
            <option value={'tiny'}>Tiny</option>
            <option value={'small'}>Small</option>
            <option value={'medium'}>Medium</option>
            <option value={'large'}>Large</option>
            <option value={'huge'}>Huge</option>
          </select>
        </form>
        <br />
        <Toolbar
          content={<NavTabs links={[{ path: '123', text: 'Tab 1' }, { path: '234', text: 'Tab 2' }]} />}
          layoutConfig={{
            size: this.state.toolbarSize,
            toggleMenu: () => {},
          }}
          logo={(
            <Toolbar.Logo
              accessory={<IconPill />}
              title="Title"
              subtitle="subtitle"
            />
          )}
          utility={(
            <Toolbar.Utility
              accessory={<IconPrinter />}
              contentHeight="80"
              contentWidth="240"
              menuItems={[
                <Toolbar.Utility.Item
                  text="Utility Menu Item 1"
                  key="Toggle1"
                />,
                <Toolbar.Utility.Item
                  text="Utility Menu Item 2"
                  key="Toggle2"
                />,
              ]}
              title="Utility Title"
            />
          )}
        />
      </div>
    );
  }
}

export default ToolbarStandard;
