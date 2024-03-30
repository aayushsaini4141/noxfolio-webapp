import Counter from "./Counter";

const About = ({data}) => {
  return (
    <section id="about" className="about-area rel z-1">
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="about-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Me</span>
                  <h2>
                    Professional <span>Problem Solutions</span> For Digital
                    Products
                  </h2>
                  <p>
                    {data.about.description}
                  </p>
                </div>
                <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                  <li>Branding &amp; Design</li>
                  <li>Digital Marketing</li>
                  <li>Web Development</li>
                  <li>Product Design</li>
                </ul>
                <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
                  <div className="info-box-item">
                    <i className="far fa-envelope" />
                    <div className="content">
                      <span>Email Us</span>
                      <br />
                      <a href={`mailto:${data.email}`}>{data.email}</a>
                    </div>
                  </div>
                  <div className="info-box-item">
                    <i className="far fa-phone" />
                    <div className="content">
                      <span>Make A Call</span>
                      <br />
                      <a href={`tel:${data.about.phoneNumber}`}>{data.about.phoneNumber}</a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-image-part wow fadeInUp delay-0-3s">
                <img src={data.about.avatar.url} alt="About Me" />
                <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                  <img src="assets/images/about/btn-image1.png" alt="Image" />
                  <h6>{data.about.title}</h6>
                  <i className="fas fa-arrow-right" />
                </div>  
                <div className="about-btn btn-two wow fadeInRight delay-0-5s">
                  <img src="assets/images/about/btn-image2.png" alt="Image" />
                  <h6>{data.about.name}</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="dot-shape">
                  <img src="assets/images/shape/about-dot.png" alt="Shape" />
                </div>
              </div>
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
    </section>
  );
};
export default About;


