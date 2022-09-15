import React, { useState } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

const Operations = (props) => {

  const [showtab1, setShowTab1] = useState(false);
  const [showtab2, setShowTab2] = useState(false);
  const [showtab3, setShowTab3] = useState(false);
const openTab1 = () => setShowTab1(true);
const closeTab1 = () => setShowTab1(false);

const openTab2 = () => setShowTab2(true);
const closeTab2 = () => setShowTab2(false);
const openTab3 = () => setShowTab3(true);
const closeTab3 = () => setShowTab3(false);

// const openTab1 = () => {
//   const dialog = document.getElementById("tabDialog_1");
//   dialog.showModal();
//   console.log("tab1");
// };
// const closeTab1 = () => {
//   const dialog = document.getElementById("tabDialog_1");
//   dialog.close();
//   console.log("closing");
// }





  
    return (
<section className="section" id="section--2">
    <div className="section__title">
      <h2 className="section__description">Operations</h2>
      <h3 className="section__header">
        Everything as simple as possible, but no simpler.
      </h3>
    </div>

    <div className="operations">
    <button
          className="btn operations__tab operations__tab--1"
        onClick={openTab1}>
          <span>01</span>Instant Transfers
        </button>

      <Dialog aria-labelledby="content--1" isOpen={showtab1} onDismiss={closeTab1} className="modal__dialog">
      <div
        className="operations__content--1"
      >
          <h5 className="operations__header">
          Transfer money to anyone, instantly! No fees, no BS.
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
       <span className="formDialog__closeBtn" onClick={closeTab1}>x</span>
        </div>
        </Dialog>

        <button className="btn operations__tab operations__tab--2" onClick={openTab2}>
          <span>02</span>Instant Loans
        </button>

<Dialog aria-labelledby="content--2" isOpen={showtab2} onDismiss={closeTab2} className="modal__dialog">
  <div className="operations__content--2">
       
       <h5 className="operations__header">
         Buy a home or make your dreams come true, with instant loans.
       </h5>
       <p>
         Duis aute irure dolor in reprehenderit in voluptate velit esse
         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit
         anim id est laborum.
       </p>
       <span className="formDialog__closeBtn" onClick={closeTab2}>x</span>
</div>
</Dialog>



<button className="btn operations__tab--3" onClick={openTab3}>
          <span>03</span>Instant Closing
        </button>
      
        <Dialog aria-labelledby="content--3" isOpen={showtab3} onDismiss={closeTab3} className="modal__dialog">
<div>
      <div className="operations__content--3">
       
        <h5 className="operations__header">
          No longer need your account? No problem! Close it instantly.
        </h5>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <span className="formDialog__closeBtn" onClick={closeTab3}>x</span>
       </div>
      </div>
      </Dialog>
      </div>
    
  </section>
    )
};
 

export default Operations;
