import Link from "next/link";

const Blog = () => {
  return (
    <section id="blog" className="blog-area rel z-1">
      <div className="for-bgc-black pt-130 pb-100 rpt-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">News &amp; Blog</span>
                <h2>
                  Latest News &amp; <span>Blog</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog1.png" alt="Blog" />
                </div>
                <div className="content">
                  <div className="blog-meta mb-35">
                    <Link legacyBehavior className="tag" href="blog">
                      Design
                    </Link>
                    <Link legacyBehavior className="tag" href="blog">
                      Figma
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="blog-details">
                      Tips For Conductin See Usability Studies
                    </Link>
                  </h5>
                  <hr />
                  <div className="blog-meta mt-35">
                    <a className="date" href="#">
                      <i className="far fa-calendar-alt" /> September 25, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog2.png" alt="Blog" />
                </div>
                <div className="content">
                  <div className="blog-meta mb-35">
                    <Link legacyBehavior className="tag" href="blog">
                      Design
                    </Link>
                    <Link legacyBehavior className="tag" href="blog">
                      Figma
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="blog-details">
                      Keyboard-Only Suppor Assistive Technology
                    </Link>
                  </h5>
                  <hr />
                  <div className="blog-meta mt-35">
                    <a className="date" href="#">
                      <i className="far fa-calendar-alt" /> September 25, 2023
                    </a>
                  </div>
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
export default Blog;


