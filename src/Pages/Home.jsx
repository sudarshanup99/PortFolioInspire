import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className=" home-container" id="home">
        <div>
          <img
            className="Image rounded-circle "
            src="./SudarImage.jpeg"
            alt="error"
          />
        </div>
        <div className="home-content">
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

          <div className="home-buttons d-flex  ">
            <a
              className="btn btn-info me-3 "
              href="https://api.whatsapp.com/send?phone=9804001321"
              rel="noreferrer"
              target="_blank"
            >
              Hire me
            </a>

            <a
              className="btn btn-resume"
              href=""
              download="sudarshan-timalsina-cv (2).pdf"
            >
              My resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
