import React from 'react';

export default function Modal(props) {
  return (
    <div className={props.modalOpen ? 'Modal modalOpen' : 'Modal'}>
      <div
        className="modalImg"
        style={props.createBgImg(props.selectedImg.url)}
      >
        <div className="closeModal" onClick={props.modalClose}>
          X
        </div>
      </div>
      <div className="modalCaption">
        <p>{props.selectedImg.caption}</p>
        <p>{props.selectedImg.info}</p>
      </div>
    </div>
  );
}
