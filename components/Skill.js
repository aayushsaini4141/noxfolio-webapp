import Link from "next/link";


const Skill = ({data}) => {
  return (
    <section id="skills" className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-5">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">My Skills</span>
                  <h2>
                    Let’s Explore Popular <span>Skills &amp; Experience</span>
                  </h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus to voluptatem
                    accusantium doloremque laudantium, totam rem aperiamc eaque
                    ipsa quae ab illo inventore veritatis
                  </p>
                </div>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn">
                    Learn More <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-items-wrap">
                <div className="row">
                  {data.skills.map((skill) => (
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6" key={skill._id} >
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        <img src={skill.image.url} alt="Skill" />
                        <h5>{skill.name}</h5>
                        <span className="percent">{skill.percentage}%</span>
                      </div>
                    </div>
                  ))}
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
export default Skill;

