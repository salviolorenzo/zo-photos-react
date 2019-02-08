import React from 'react';

export default function Modal(props) {
  return (
    <div className={props.modalOpen ? 'Modal modalOpen' : 'Modal'}>
      <div
        className="modalImg"
        style={props.createBgImg(props.selectedImg.url)}
      >
        <div
          style={props.closeButtonImg(require('./images/icons8-cancel.svg'))}
          className="closeModal"
          onClick={props.modalClose}
        />
      </div>
      <div className="modalCaption">
        <p>{props.selectedImg.caption}</p>
        <p>{props.selectedImg.info}</p>
      </div>
    </div>
  );
}
