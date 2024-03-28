"use client";
import React, { useState } from 'react';
import Slider from 'react-slick';
import { noxfolioSlider } from '@/utility/sliderProps';

const Testimonial = ({ data }) => {
  const [slider, setSlider] = useState(null);

  const next = () => {
    slider && slider.slickNext();
  };

  const previous = () => {
    slider && slider.slickPrev();
  };

  return (
    <section className="testimonials-area rel z-1">
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-90">
            <div className="col-lg-4">
              <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Clients Testimonials</span>
                  <h2>I’ve 1253+ Clients <span>Feedback</span></h2>
                  <p>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis</p>
                </div>
                <div className="slider-arrows">
                  <button className="testimonial-prev slick-arrow" onClick={previous}>
                    <i className="fal fa-arrow-left" />
                  </button>
                  <button className="testimonial-next slick-arrow" onClick={next}>
                    <i className="fal fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <Slider
                ref={setSlider}
                {...noxfolioSlider.testimonials}
                className="testimonials-wrap"
              >
                {data.testimonials?.map((testimonial, index) => (
                  <div className="testimonial-item wow fadeInUp delay-0-3s" key={index}>
                    <div className="text">{testimonial.text}</div>
                    <div className="testi-des">
                    
                    <div className="author">
                      <img
                        src={testimonial.image.url}
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      {testimonial.review}
                    </div>
                    <div className="testi-des">
                      <h5>{testimonial.name}</h5>
                      <span>{testimonial.position}</span>
                    </div>
                  </div>
     
                    </div>
                  
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Testimonial;




{/* <section className="testimonials-area rel z-1">
<div className="for-bgc-black py-130 rpy-100">
  <div className="container">
    <div className="row gap-90">
      <div className="col-lg-4">
        <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
          <div className="section-title mb-40">
            <span className="sub-title mb-15">
              Clients Testimonials
            </span>
            <h2>
              I’ve 1253+ Clients <span>Feedback</span>
            </h2>
            <p>
              Sed ut perspiciatis unde omnin natus totam rem aperiam
              eaque inventore veritatis
            </p>
          </div>
          <div className="slider-arrows">
            <button
              className="testimonial-prev slick-arrow"
              onClick={this.previous}
            >
              <i className="fal fa-arrow-left" />
            </button>
            <button
              className="testimonial-next slick-arrow"
              onClick={this.next}
            >
              <i className="fal fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        `<Slider
          ref={(c) => (this.slider = c)}
          {...noxfolioSlider.testimonials}
          className="testimonials-wrap"
        >`
          {data.testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item wow fadeInUp delay-0-3s">
              <div className="author">
                <img
                  src={testimonial.image}
                  alt="Author"
                />
              </div>
              <div className="text">
                {testimonial.review}
              </div>
              <div className="testi-des">
                <h5>{testimonial.name}</h5>
                <span>{testimonial.position}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
</div>
<div className="bg-lines">
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
</div>
</section> */}
// "use client";
// import { useState, useRef } from 'react';
// // import Slider from 'react-slick';
// import { noxfolioSlider } from "@/utility/sliderProps";
// import { Component } from "react";
// import Slider from "react-slick";

// const Testimonial = ({ data }) => {
//   const [testimonials, setTestimonials] = useState(data.testimonials);
//   const sliderRef = useRef();

//   const next = () => {
//     sliderRef.current.slickNext();
//   };

//   const previous = () => {
//     sliderRef.current.slickPrev();
//   };

//   return (
//     <section className="testimonials-area rel z-1">
//       <div className="for-bgc-black py-130 rpy-100">
//         <div className="container">
//           <div className="row gap-90">
//             <div className="col-lg-4">
//               <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
//                 <div className="section-title mb-40">
//                   <span className="sub-title mb-15">Clients Testimonials</span>
//                   <h2>I’ve 1253+ Clients <span>Feedback</span></h2>
//                   <p>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis</p>
//                 </div>
//                 <div className="slider-arrows">
//                   <button className="testimonial-prev slick-arrow" onClick={previous}>
//                     <i className="fal fa-arrow-left" />
//                   </button>
//                   <button className="testimonial-next slick-arrow" onClick={next}>
//                     <i className="fal fa-arrow-right" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-8">
//             <Slider
                  
//                   {...noxfolioSlider.testimonials}
//                   className="testimonials-wrap"
//                 >
               
//                 <div className="testimonial-item wow fadeInUp delay-0-2s">
//                     <div className="author">
//                       <img
//                         src="assets/images/testimonials/author1.png"
//                         alt="Author"
//                       />
//                     </div>
//                     <div className="text">
//                       At vero eoset accusamus et iusto odio dignissimos ducimus
//                       quie blanditiis praesentium voluptatum deleniti atque
//                       corrupti dolores
//                     </div>
//                     <div className="testi-des">
//                       <h5>Rodolfo E. Shannon</h5>
//                       <span>CEO &amp; Founder</span>
//                     </div>
//                   </div>
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-lines">
//         {[...Array(10)].map((_, index) => (
//           <span key={index} />
//         ))}
//       </div>
//     </section>
//   );
// };