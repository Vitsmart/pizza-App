
import user1 from './images/user-1.jpg'
import user2 from './images/user-2.jpg'
import user3 from './images/user-3.jpg'


const Testimonials = () => {

   


    return (
        <section class="section" id="section--3">
        <div class="section__title section__title--testimonials">
          <h2 class="section__description">its time to step up and enjoy this amazing community Life</h2>
          <h3 class="section__header">
            Millions of programmers are already making their lives simpler.
          </h3>
        </div>
    
        <div class="wrapper">
          
          <div class="slide slide--1">
            <div class="testimonial">
              <h5 class="testimonial__header">Best financial decision ever!</h5>
              <blockquote class="testimonial__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium quas quisquam non? Quas voluptate nulla minima
                deleniti optio ullam nesciunt, numquam corporis et asperiores
                laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
                id alias reiciendis, perferendis facere pariatur dolore veniam
                autem esse non voluptatem saepe provident nihil molestiae.
              </blockquote>
              <address class="testimonial__author">
                <img src={user1} alt="" class="testimonial__photo" />
                <h6 class="testimonial__name">Aarav Lynn</h6>
                <p class="testimonial__location">San Francisco, USA</p>
              </address>
            </div>
          </div>
    
          <div class="slide slide--2">
            <div class="testimonial">
              <h5 class="testimonial__header">
                The last step to becoming a complete minimalist
              </h5>
              <blockquote class="testimonial__text">
                Quisquam itaque deserunt ullam, quia ea repellendus provident,
                ducimus neque ipsam modi voluptatibus doloremque, corrupti
                laborum. Incidunt numquam perferendis veritatis neque repellendus.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
                deserunt exercitationem deleniti.
              </blockquote>
              <address class="testimonial__author">
                <img src={user2} alt="" class="testimonial__photo" />
                <h6 class="testimonial__name">Miyah Miles</h6>
                <p class="testimonial__location">London, UK</p>
              </address>
            </div>
          </div>
    
          <div class="slide slide--3">
            <div class="testimonial">
              <h5 class="testimonial__header">
                Finally free from old-school banks
              </h5>
              <blockquote class="testimonial__text">
                Debitis, nihil sit minus suscipit magni aperiam vel tenetur
                incidunt commodi architecto numquam omnis nulla autem,
                necessitatibus blanditiis modi similique quidem. Odio aliquam
                culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
                deleniti saepe aliquid quos inventore sequi. Necessitatibus id
                alias reiciendis, perferendis facere.
              </blockquote>
              <address class="testimonial__author">
                <img src={user3} alt="" class="testimonial__photo" />
                <h6 class="testimonial__name">Francisco Gomes</h6>
                <p class="testimonial__location">Lisbon, Portugal</p>
              </address>
            </div>
          </div> 
    
           {/* <div class="slide"><img src="img/img-1.jpg" alt="Photo 1" /></div>
          <div class="slide"><img src="img/img-2.jpg" alt="Photo 2" /></div>
          <div class="slide"><img src="img/img-3.jpg" alt="Photo 3" /></div>
          <div class="slide"><img src="img/img-4.jpg" alt="Photo 4" /></div> 
            */}
          <button class="slider__btn slider__btn--left" ></button>
          <button class="slider__btn slider__btn--right" ></button>
          <div class="dots"></div>
        </div>
      </section>
    )
};
export default Testimonials;