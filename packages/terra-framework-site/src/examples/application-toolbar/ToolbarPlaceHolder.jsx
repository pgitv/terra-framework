import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
};

const Placeholder = ({ text, width }) => (
  <div style={{ height: '100%', width, position: 'relative', padding: '5px' }}>
    <div style={{ height: '100%', width: '100%', position: 'relative', border: '3px dashed #fff' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', color: '#fff', transform: 'translate3d(-50%, -50%, 0)' }}>
        <h3>{text}</h3>
      </div>
    </div>
  </div>
);

Placeholder.propTypes = propTypes;

export default Placeholder;
