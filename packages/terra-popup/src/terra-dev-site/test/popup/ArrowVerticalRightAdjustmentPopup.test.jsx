import React from 'react';
import Popup from '../../../Popup';

// This tests verifies the PopupUtils.leftOffset methed when (offset > contentBounds.height - cornerOffset)
class AlignmentPopup extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
    this.state = { open: true };
  }

  componentDidMount() {
    this.forceUpdate();
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  setParentNode(node) {
    this.parentNode = node;
  }

  getParentNode() {
    return this.parentNode;
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div
        id="test-popup-area"
        style={{
          position: 'relative', height: '200px', width: '200px', background: 'aliceblue',
        }}
        ref={this.setParentNode}
      >
        <Popup
          boundingRef={this.getParentNode}
          classNameArrow="test-arrow"
          classNameContent="test-content"
          contentAttachment="top right"
          contentHeight="120"
          contentWidth="160"
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
        >
          <p style={{ padding: '5px' }}>This popup arrow has vertical-right attachment, but was adjusted to be on the screen.</p>
        </Popup>
        <button
          type="button"
          id="alignment-button"
          style={{
            position: 'absolute', right: '0px', height: '20px', width: '20px', backgroundColor: '#c00',
          }}
          onClick={this.handleButtonClick}
          ref={this.setButtonNode}
        />
      </div>
    );
  }
}

export default AlignmentPopup;
