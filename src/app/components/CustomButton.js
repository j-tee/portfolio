/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function CustomButton() {
  const { onClick, direction } = props;
  const icon = direction === 'prev' ? faChevronLeft : faChevronRight;
  return (
    <button onClick={onClick} style={{ border: 'none', background: 'none' }}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </button>
  );
}

export default CustomButton;
