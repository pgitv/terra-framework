import React from 'react';
import Toolbar from 'terra-application-toolbar';
import PlaceHolder from './ToolbarPlaceHolder';

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
          layoutConfig={{ size: this.state.toolbarSize, toggleMenu: () => {} }}
          logo={<PlaceHolder text="Logo" width="100%" />}
          utility={<PlaceHolder text="Utility" width="250px" />}
          content={<PlaceHolder text="Content" width="100%" />}
        />
      </div>
    );
  }
}

export default ToolbarStandard;
