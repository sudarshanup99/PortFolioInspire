import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Work = () => {
  return (
    <>
      <div className="container-fluid work-experience" id="work">
        <div className="work-exp  ">
          <h2 className="col-12 justify-content-center  text-center text-uppercase ">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#138781">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#138781", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #138781",
              }}
              date="2024 August-present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">Inspire Nepal</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Nakhipot,Laltitpur
              </h4>
              <p>Data cleaning,processing,meaningful insights</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#138781", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #138781",
              }}
              date="2023 August-2023 November"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Data Analytics Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Chakupat,Laltitpur
              </h4>
              <p>Data cleaning,processing,meaningful insights</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Work;
