import Navigation from "./Navigation";
import heros from './images/pp4.jpg'
import programmers from './images/office1.jpg'
import user2 from './images/user-2.jpg'
import digitalimage from './images/p1.jpg'
import growimage from './images/hands.jpg'
import cardimage from './images/welcome hands.jpg'


const Main = () => {

  return (
        <>
    <Navigation />;
    <main className="main">
    <div className="main__title">
      <h1>Next Age</h1>
      <h2>
        Where
        <span className="highlight"> Dreams </span>
         are <br />
        <span className="highlight"> Geared </span> to Greatness
      </h2>
      
      <h4>it's time to go beyond! join Next Age - A muiltifunctional community of great minds</h4>
      <p>
        <ul>
          <li>Learn</li>
          <li>Grow</li>
          <li>Impact</li>
        </ul>
      </p>
      </div>
      <div className="aside">
      {/*<button className="btn--text btn--scroll-to">Learn more </button>*/}
      <img
        src={heros}
        className="main__img"
        alt="main img"
      />
      <img 
      src={programmers}
      className="main__img2"
      alt="programmers"
      />
    </div>
  
  </main>
  
  <div>
  <section className="section" id="section--1">
    <div className="section__title">
      <h2 className="section__description">Features</h2>
      <h3 className="section__header">
        Everything you need in a Smart world and more.
      </h3>
    </div>

    <div className="features">
      <img
        src={digitalimage}
        data-src="images/digital.jpg"
        alt="Computer"
        className="features__img"
      />
       <div className="features__feature">
       
        
        <h5 className="features__header">100% digital community</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
          sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
          debitis ducimus.
        </p>
      </div>

      <div className="features__feature">
       
        <h5 className="features__header">Watch your skills grow</h5>
        <p>
          Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
          inventore ab? Nulla incidunt eius numquam sequi iste pariatur
          quibusdam!
        </p>
      </div>
      <img
        src={growimage}
        data-src="images/grow.jpg"
        alt="Plant"
        className="features__img"
      />

      <img
        src={cardimage}
        data-src="images/card.jpg"
        alt="Credit card"
        className="features__img"
      />
      <div className="features__feature">
        
        <h5 className="features__header">Shared projects to take you to the Next level</h5>
        <p>
          Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
          eveniet consequatur odit quam quos possimus assumenda dicta fuga
          inventore ab.
        </p>
      </div>
    </div>
  </section>
</div>
<div class="section__title section__title--testimonials">
          <h2 class="section__description">it's time to enjoy community Life</h2>
          <h3 class="section__header">
            Millions of programmers are already making their lives simpler.
          </h3>
        </div>
    
    <div className="wrapper__1">
      
      <div className="slide slide--2">
        <div className="testimonial">
          <h5 className="testimonial__header">
             Best decision ever - now i can fly !
          </h5>
          <blockquote className="testimonial__text">
            "Quisquam itaque deserunt ullam, quia ea repellendus provident,
            ducimus neque ipsam modi voluptatibus doloremque, corrupti
            laborum. Incidunt numquam perferendis veritatis neque repellendus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            deserunt exercitationem deleniti" --
          </blockquote>
          <address className="testimonial__author">
            <img src={user2} alt="" className="testimonial__photo" />
            <h6 className="testimonial__name">Miyah Roberts</h6>
            <p className="testimonial__location">London, UK</p>
          </address>
        </div>
      </div>

   </div>
  <footer className="footer"> 
    <ul className="footer__nav">
      <li className="footer__item">
        <a className="footer__link" href="/#">About</a>
      </li>
      <li className="footer__item">
        <a className="footer__link" href="/#">Pricing</a>
      </li>
      <li className="footer__item">
        <a className="footer__link" href="/#">Terms of Use</a>
      </li>
      <li className="footer__item">
        <a className="footer__link" href="/#">Privacy Policy</a>
      </li>
      <li className="footer__item">
        <a className="footer__link" href="/#">Careers</a>
      </li>
      <li className="footer__item">
        <a className="footer__link" href="/#">Blog</a>
      </li>
      <li className="footer__item">
        <a className="footer__link" href="contact.js">Contact Us</a>
      </li>
    </ul>
    <img src="images/icon.png" alt="Logo" className="footer__logo" />
    <p className="footer__copyright">
      &copy; Copyright by
      <a
        className="footer__link twitter-link"

        href="https://twitter.com/NobleTrust"
        > Next-Age Group</a>.
         Use for learning purposes only.
    </p>
  </footer>
  </>
  );
};


export default Main;
