import React from 'react';
import Button from 'terra-button';
import Monster from './Monster';


class DefaultDialogModal extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
  }

  disclose() {
    this.props.app.disclose({
      preferredType: 'modal',
      content: {
        key: 'DemoContainer',
        component: <Monster />,
      },
    });
  }


  render() {
    /* eslint-disable no-unused-vars */
    const {
      app,
    } = this.props;
    /* eslint-enable no-unused-vars */

    return (
      <Button text="Poo" onClick={this.disclose} />
    );
  }
}

export default DefaultDialogModal;
