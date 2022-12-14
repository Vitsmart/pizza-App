import React, { useState } from 'react';
import handshake from './images/handshake1.jpg'

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

const data = {name, username, email, password};
const handleLogin = (e) => {
  e.preventDefault();
  console.log(data);
  alert(`${name} Account SUCCESSFUL ✔`)
}


  const handleModal = () => {
    const dialog = document.getElementById("formDialog");
    dialog.showModal();
   
  }


  const handleClose = () => {
    const dialog = document.getElementById("formDialog");
    dialog.close()
  }


return (
    <>
    <section className="section section--sign-up">
    <div className="section__title">
      <h3 className="section__header">
        its time to shoot for the stars. The best time to join is now!
      </h3>
    </div>
    <button className="buttn" onClick={handleModal}>Click to register</button>
  </section>
  <div>
    <img
    src={handshake}
    className="section--img"
    alt="welcome"
    />
  </div>
   

  <dialog id='formDialog' className='formDialog'>
    
    <div className="formDialog__container">
      
    <h2 className="modal__header">
      Create your account <br />
      in just <span className="highlight">5 minutes</span>
    </h2>
      
        <span className="formDialog__closeBtn" onClick={handleClose}>x</span>
      
    <form className="modal__form">
      <label>Name</label>
      <input type="text" 
      onChange={(e) => setName(e.target.value)}/>
      <label>Username</label>
      <input type="text" 
      onChange={(e) => setUserName(e.target.value)} />
      <label>Email Address</label>
      <input type="email" 
      onChange={(e) => setEmail(e.target.value)} />
      <label>Create Password</label>
      <input type="password" 
      minLength={5}
      onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={handleLogin} className="btn">Next step &rarr;</button>
    </form>
    
    </div>

      </dialog>


  </>
)
};
  



export default SignUp; 