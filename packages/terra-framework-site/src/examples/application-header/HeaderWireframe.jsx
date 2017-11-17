import React from 'react';
import Header from 'terra-application-header';
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
        <Header
          layoutConfig={{ size: this.state.headerSize, toggleMenu: () => {} }}
          logo={<PlaceHolder color="#fff" text="Logo" />}
          utility={<PlaceHolder color="#fff" text="Utility" width="250px" />}
          widget={<PlaceHolder color="#fff" text="Widgets" width="150px" />}
          content={<PlaceHolder color="#fff" text="Content" />}
        />
      </div>
    );
  }
}

export default ToolbarStandard;
