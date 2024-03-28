import Link from "next/link";

const Projects = ({ data }) => {
  // Reverse the projects array and slice it to get only the latest 4 projects
  const latestProjects = data.projects.slice(-4).reverse();

  return (
    <section id="portfolio" className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Latest Works</span>
              <h2>
                Explore My Popular <span>Projects</span>
              </h2>
            </div>
          </div>
        </div>
        {latestProjects.map((project, index) => (
          <div key={index} className={`row align-items-center pb-25 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
            <div className="col-lg-6">
              <div className="project-image wow fadeInLeft delay-0-2s">
                <img src={project.image.url} alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="project-content wow fadeInRight delay-0-2s">
                <span className="sub-title">Product Design</span>
                <h2>
                  <Link legacyBehavior href="project-details">
                    {project.title}
                  </Link>
                </h2>
                <p>
                  {project.description}
                </p>
                <Link legacyBehavior href="/project-details">
                  <a className="details-btn">
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="/projects">
            <a className="theme-btn">
              View More Projects <i className="far fa-angle-right" />
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
    </section>
  );
};


export default Projects;

