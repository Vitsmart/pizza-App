import Navigation from "./Navigation";
import hero from './images/hero.png'
import user2 from './images/user-2.jpg'
import digital from './images/digital.jpg'


const Main = () => {

  return (
        <>
    <Navigation />;
    <main className="main">
    <div className="main__title">
      <h1>
        Where
        <span className="highlight"> services </span>
         exceed <br />
        <span className="highlight"> expectations </span>
      </h1>
      <h4>A wonderful banking experience for a simpler life. </h4>
      <button className="btn--text btn--scroll-to">Learn more </button>
      <img
        src={hero}
        className="main__img"
        alt="Noble bank items"
      />
    </div>
  
  </main>
  
  
   <section className="section" id="section--1">
    <div className="section__title">
      <h2 className="section__description">Features</h2>
      <h3 className="section__header">
        Everything you need in a modern bank and more.
      </h3>
    </div> 

     <div className="features">
      <img
        src={digital}
        alt="Computer"
        className="features__img"
      />
      </div>
   </section>

    <section className="section" id="section3">
    <div className="section__title section__title--testimonials">
      <h2 className="section__description">Not sure yet? Read what users are saying</h2>
      <h3 className="section__header">
        Millions of people are already making their lives simpler with us.
      </h3>
    </div>
    </section>

    
    <div className="slider">
      
      <div className="slide slide--2">
        <div className="testimonial">
          <h5 className="testimonial__header">
            This is my best decision ever !
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
        > Noble Group</a>.
         Use for learning purposes only.
    </p>
  </footer>
  </>
  );
};


export default Main;