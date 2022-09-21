import React, { useState } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { borderRadius } from "@mui/system";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 500,
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  borderRadius: '12px',
  p: 6,
};

  


const Community = (props) => {

  const [showtab1, setShowTab1] = useState(false);
  const [showtab3, setShowTab3] = useState(false);
const openTab1 = () => setShowTab1(true);
const closeTab1 = () => setShowTab1(false);


const openTab3 = () => setShowTab3(true);
const closeTab3 = () => setShowTab3(false);

const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  






  
    return (
<section className="section" id="section--2">
    <div className="section__title">
      <h2 className="section__description">Operations</h2>
      <h3 className="section__header">
        Everything as simple as possible, teams building lives.
      </h3>
    </div>

    <div className="operations">
    <button
          className="btn operations__tab operations__tab--1"
        onClick={openTab1}>
          <span>01</span>Share Story/Experience
        </button>

      <Dialog aria-labelledby="content--1" isOpen={showtab1} onDismiss={closeTab1} className="modal__dialog">
      <div
        className="operations__content--1"
      >
          <h5 className="operations__header">
          Tell your stories to inspire others, share your experiences to the community
        </h5>
        <p className="pass">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
       <span className="formDialog__closeBtn" onClick={closeTab1}>x</span>
        </div>
        </Dialog>

        <button className="btn operations__tab operations__tab--2" onClick={handleOpen}>
          <span>02</span>Contribute to the community
        </button>

{/* <Dialog aria-labelledby="content--2" isOpen={showtab2} onDismiss={closeTab2} className="modal__dialog">
  <div className="operations__content--2"> */}
  <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className="operations__content--2">
          <h5 className="operations__header">
         want to impact lives, contribute by teaching a topic today or answering questions. 
       </h5>
       <p className="pass">
         Duis aute irure dolor in reprehenderit in voluptate velit esse
         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit
         anim id est laborum.
       </p>
       <span className="formDialog__closeBtn" onClick={handleClose}>x</span>
       </div>
          </Typography>
          
        </Box>
      </Modal>
    </div>
       

<button className="btn operations__tab operations__tab--3" onClick={openTab3}>
          <span>03</span>Ask and learn from Questions
        </button>
      
        <Dialog aria-labelledby="content--3" isOpen={showtab3} onDismiss={closeTab3} className="modal__dialog">
<div>
      <div className="operations__content--3">
       
        <h5 className="operations__header">
          Need more clarifications, Ask your Questions here.
        </h5>
        <p className="pass">
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
 

export default Community;
