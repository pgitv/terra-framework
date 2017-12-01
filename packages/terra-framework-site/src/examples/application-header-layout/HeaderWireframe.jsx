import React from 'react';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import PlaceHolder from '../common/PlaceHolder';

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
        <div style={{ border: '1px solid black', height: '60px', position: 'relative', width: '100%' }}>
          <ApplicationHeaderLayout
            layoutConfig={{ size: this.state.headerSize, toggleMenu: () => {} }}
            logo={<PlaceHolder text="Logo" width="120px" />}
            utilities={<PlaceHolder text="Utilities" width="250px" />}
            extensions={<PlaceHolder text="Extensions" width="150px" />}
            navigation={<PlaceHolder text="Navigation" />}
            toggle={<PlaceHolder text="Toggle" width="80px" />}
          />
        </div>
      </div>
    );
  }
}

export default ToolbarStandard;
