import React from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';
import ActionFooter from 'terra-action-footer';
import Popup from 'terra-popup';
import DialogModal from '../../src/DialogModal';
import './Monster.scss';

const paraOne = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
                  'Maecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.',
                  'Integer congue feugiat ultricies.',
                  ' Nunc non mauris sed tellus cursus vestibulum nec quis ipsum.',
                  'Vivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.',
                  ' Cras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.',
                  'Donec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.',
                  'Nam vehicula, arcu vitae egestas porttitor,',
                  'turpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.'];

class DefaultDialogModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isFocused: true,
      isPopupOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOnRequestFocus = this.handleOnRequestFocus.bind(this);
    this.handleOnReleaseFocus = this.handleOnReleaseFocus.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentDidMount() {
    console.log('whomp');
    if (this.state.isFocused && this.state.isOpen && this.props.app.requestFocus) {
      console.log('poo');
      this.props.app.requestFocus();
    }
  }

  componentDidUpdate() {
    if (this.state.isFocused && this.state.isOpen && this.props.app.requestFocus) {
      this.props.app.requestFocus();
    }
  }

  componentWillUnmount() {
    if (this.props.app.releaseFocus) {
      this.props.app.releaseFocus();
    }
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  handleOnRequestFocus() {
    this.setState({ isFocused: false });
  }

  handleOnReleaseFocus() {
    this.setState({ isFocused: true });
  }

  handleButtonClick() {
    console.log('should open');
    this.setState({ isPopupOpen: true });
  }

  handleRequestClose() {
    this.setState({ isPopupOpen: false });
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      app,
    } = this.props;
    /* eslint-enable no-unused-vars */

    return (
      <div>
        <DialogModal
          ariaLabel="Default Dialog Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          header={<ActionHeader title="Action Header used here" onClose={this.handleCloseModal} />}
          footer={<ActionFooter start="Footer Goes here" />}
          releaseFocus={app.releaseFocus}
          requestFocus={app.requestFocus}
        >
          <p>{paraOne}</p>
          <div>
            <Popup
              isOpen={this.state.isPopupOpen}
              targetRef={() => document.getElementById('poo')}
              onRequestClose={this.handleRequestClose}
              releaseFocus={this.handleOnReleaseFocus}
              requestFocus={this.handleOnRequestFocus}
            >
              <p>{paraOne}</p>
            </Popup>
            <Button id="poo" text="Default Popup" onClick={this.handleButtonClick} />
          </div>
        </DialogModal>
        <Button text="Trigger Dialog Modal" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default DefaultDialogModal;
