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
