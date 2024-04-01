import React from 'react';

export const Modal = (props) => {
  return (
    props.view && (
      <div className="modal-overlay">
        <div className="modal">
          <button onClick={()=>props.onClose()} className="close-button" >
            X
          </button>
          {props.children}
        </div>
      </div>
    )
  );
};
