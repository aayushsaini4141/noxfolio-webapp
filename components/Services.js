import Link from "next/link";

const Services = ({ data }) => {

  return (
    <section
      id="services"
      className={`services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1 `}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Popular Services</span>
              <h2>
                My <span>Special Service</span> For your Business Development
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {data.services?.map((service) => (
            <div className="col-lg-6" key={service._id}>
              <div className="service-item wow fadeInUp delay-0-2s">
                {/* <div className="number">
                  {service._id >= 9 ? service._id : `0${service._id}`}.
                </div> */}
                <div className="content">
                  <h4>{service.name}</h4>
                  <p>{service.charge}</p>
                  <p>{service.desc}</p>
                </div>
                <Link legacyBehavior href="/#">
                  <a className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
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
export default Services;


