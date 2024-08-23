import { TechStackList } from "../Utils/TechStackList";

const TechStacks = () => {
  return (
    <>
      <div className="container-fluid tech-stack" id="skill">
        <div className="pt-4">
          <h2 className=" col-12 col-xs-12 mt-3 bt-1 text-center text-uppercase">
           Skills
          </h2>
          <hr />
        </div>

        <div className="row mt-5 px-4 ">
          {TechStackList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStacks;
