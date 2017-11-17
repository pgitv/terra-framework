import React from 'react';
import Header from 'terra-application-header';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconPill from 'terra-icon/lib/icon/IconPill';

class ToolbarStandard extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.getId = this.getId.bind(this);
    this.state = { headerSize: 'tiny' };
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
          <label htmlFor={this.getId('headerSize')}>Header Size</label>
          <select id={this.getId('headerSize')} name="headerSize" value={this.state.headerSize} onChange={this.handleSelectChange}>
            <option value={'tiny'}>Tiny</option>
            <option value={'small'}>Small</option>
            <option value={'medium'}>Medium</option>
            <option value={'large'}>Large</option>
            <option value={'huge'}>Huge</option>
          </select>
        </form>
        <br />
        <Header
          layoutConfig={{
            size: this.state.headerSize,
            toggleMenu: () => {},
          }}
          logo={(
            <Header.Logo
              accessory={<IconPill />}
              title="Title"
              subtitle="subtitle"
            />
          )}
          utility={(
            <Header.Utility
              accessory={<IconPrinter />}
              contentHeight="80"
              contentWidth="240"
              menuItems={[
                <Header.Utility.Item
                  text="Utility Menu Item 1"
                  key="Toggle1"
                />,
                <Header.Utility.Item
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
