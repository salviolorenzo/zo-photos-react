import React from 'react';

export default function Modal(props) {
  return (
    <div className="Modal">
      <div className="modalImg">
        <div className="closeModal">X</div>
      </div>
      <div className="modalCaption" />
    </div>
  );
}
