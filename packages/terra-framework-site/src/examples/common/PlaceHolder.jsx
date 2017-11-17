import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  text: PropTypes.string,
  width: PropTypes.string,
};

const defaultProps = {
  color: '#000000',
  height: '100%',
  text: 'PlaceHolder',
  width: '100%',
};

const Placeholder = ({ color, height, text, width }) => (
  <div style={{ height, width, position: 'relative', padding: '5px' }}>
    <div style={{ height: '100%', width: '100%', position: 'relative', border: `3px dashed ${color}` }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', color, transform: 'translate3d(-50%, -50%, 0)' }}>
        <h3>{text}</h3>
      </div>
    </div>
  </div>
);

Placeholder.propTypes = propTypes;
Placeholder.defaultProps = defaultProps;

export default Placeholder;
