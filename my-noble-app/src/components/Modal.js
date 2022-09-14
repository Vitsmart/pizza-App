

// const Modal = ({handleClose, show, children}) => {
// const showHideClassName = show ? "modal display" : "modal display-none";

// return (
//     <div className={showHideClassName}>
//         <section className="modal">{children}</section>
//         <button className="btn" onClick={handleClose}>close</button>
//     </div>
// )
// };

// export default Modal;

import { Fragment } from 'react';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;