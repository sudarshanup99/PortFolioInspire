import Typewriter from "typewriter-effect";

import { AnimatedBackground } from "animated-backgrounds";

const Home = () => {
  return (
    <>
      <div className="container-fluid HomeContainer ">
      <AnimatedBackground animationName="starryNight" className="w-100" />
        <div className="row">
         
          <div className="d-flex align-items-center justify-content-center mt-5">
            <img
              src="./SudarImage.jpeg"
              alt="Error"
              className="rounded-circle HomeImage "
            />
          </div>
          <div className="home-content   mt-5 text-center">
            <h2 className="">Hi👋 I'm a</h2>
            <h1 className="">
              <Typewriter
                options={{
                  strings: ["Sudarshan Upadhaya", "React Learner"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <div className="home-buttons flex-md-row d-flex text-center align-items-center justify-content-center ">
              <a
                className="btn btn-info me-3 "
                href="https://api.whatsapp.com/send?phone=9804001321"
                rel="noreferrer"
                target="_blank"
              >
                Hire me
              </a>

              <a
                className="btn btn-danger btn-resume"
                href=""
                download="sudarshan-timalsina-cv (2).pdf"
              >
                My resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
