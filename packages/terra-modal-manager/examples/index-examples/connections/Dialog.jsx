// This component will be replaced by terra-dialog
import React from 'react';
// import PropTypes from 'prop-types';
import Button from 'terra-button';

const Dialog = ({
  header,
  footer,
  onclose,
  onback,
  children,
}) => (
  <div>
    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 20}}>
      {onback && <Button text="back" onClick={onback} />}
      <span>{header}</span>
      {onclose && <Button text="close" onClick={onclose} />}
    </div>
    {children}
    <div style={{marginTop: 20}}>{footer}</div>
  </div>
);

export default Dialog;
