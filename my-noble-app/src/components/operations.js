
const Operations = () => {



  
    return (
<section className="section" id="section--2">
    <div className="section__title">
      <h2 className="section__description">Operations</h2>
      <h3 className="section__header">
        Everything as simple as possible, but no simpler.
      </h3>
    </div>

    <div className="operations">
      <div
        className="operations__content operations__content--1"
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
        <button
          className="btn operations__tab operations__tab--1"
          data-tab="1"
        >
          <span>01</span>Instant Transfers
        </button>
        </div>




<div className="operations__content operations__content--2">
       
       <h5 className="operations__header">
         Buy a home or make your dreams come true, with instant loans.
       </h5>
       <p>
         Duis aute irure dolor in reprehenderit in voluptate velit esse
         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit
         anim id est laborum.
       </p>
        <button className="btn operations__tab operations__tab--2" data-tab="2">
          <span>02</span>Instant Loans
        </button>
</div>
     
      <div className="operations__content operations__content--3">
       
        <h5 className="operations__header">
          No longer need your account? No problem! Close it instantly.
        </h5>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <button className="btn operations__tab operations__tab--3" data-tab="3">
          <span>03</span>Instant Closing
        </button>
      </div>
     
      </div>
    
  </section>
    )
};
 {/* <div className="operations__icon operations__icon--3">
          <svg>
            <use xlink:href="img/icons.svg#icon-user-x"></use>
          </svg>
        </div> */}

export default Operations;
