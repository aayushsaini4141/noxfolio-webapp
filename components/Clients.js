import Link from "next/link";

const Clients = () => {
  return (
    <div className="client-logo-area rel z-1 pt-130 rpt-100 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center pt-5 mb-65 wow fadeInUp delay-0-2s">
              <h6>
                I’ve <span>1253+ Global Clients</span> &amp; lot’s of Project
                Complete
              </h6>
            </div>
          </div>
        </div>
        <div className="client-logo-wrap">
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-2s">
              <img
                src="assets/images/client-logos/client-logo1.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-3s">
              <img
                src="assets/images/client-logos/client-logo2.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-4s">
              <img
                src="assets/images/client-logos/client-logo3.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-5s">
              <img
                src="assets/images/client-logos/client-logo4.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-6s">
              <img
                src="assets/images/client-logos/client-logo5.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-2s">
              <img
                src="assets/images/client-logos/client-logo6.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-3s">
              <img
                src="assets/images/client-logos/client-logo7.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-4s">
              <img
                src="assets/images/client-logos/client-logo8.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-5s">
              <img
                src="assets/images/client-logos/client-logo9.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="contact">
            <a className="client-logo-item wow fadeInUp delay-0-6s">
              <img
                src="assets/images/client-logos/client-logo10.png"
                alt="Client Logo"
              />
            </a>
          </Link>
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
    </div>
  );
};
export default Clients;

