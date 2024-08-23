import ProjectList from "../Utils/ProjectList";

const Project = () => {
  return (
    <div className="container project " id="project">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        Top Recent Projects
      </h2>
      <hr />
      <p className="pb-3 text-center">These are some projects done by me.</p>
      <div className="row justify-content-center">
        {ProjectList.map((project) => (
          <div className="col-md-4 col-lg-4 mb-4" key={project._id}>
            <div className="card rounded" id="card-width">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src={project.image} alt={project.name} />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">
                  {project.technologies}
                </span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">{project.name}</h5>
                </div>
                <a
                  className="ad-btn text-center"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;


