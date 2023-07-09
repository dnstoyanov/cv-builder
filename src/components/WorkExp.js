import data from "../data/data.json";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const WorkExp = () => {
  return (
    <>
      {data.work_history.map((item) => (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "24px",
            }}
          >
            <div style={{ fontSize: "18px" }}>{item.position}</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "14px", marginRight: "4px" }}>
                <FaRegCalendarAlt
                  size={14}
                  style={{
                    color: "#ebb400",
                    marginRight: "4px",
                    marginLeft: "35px",
                  }}
                />
              </span>
              <span style={{ fontSize: "14px" }}>{item.start_date}</span>
              <span style={{ margin: "0 4px" }}>-</span>
              <span style={{ fontSize: "14px" }}>{item.end_date}</span>
              <span
                style={{
                  color: "#ebb400",
                  marginRight: "4px",
                  marginLeft: "35px",
                }}
              >
                <FaLocationDot
                  size={14}
                  style={{
                    color: "#ebb400",
                    marginRight: "4px",
                    marginLeft: "35px",
                  }}
                />
              </span>
              <span style={{ fontSize: "14px" }}>{item.location}</span>
            </div>
          </div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#ebb400",
              textTransform: "uppercase",
              marginTop: "16px",
            }}
          >
            {item.company}
          </div>
          <div style={{ marginTop: "16px" }}>{item.jobDescription}</div>
          {item.projects.map((project) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "16px",
              }}
            >
              <div style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                {project.project_name}
              </div>
              <div style={{ marginTop: "15px" }}>
                {project.project_description}
              </div>
              <div>{project.project_outcome}</div>
              <div style={{ fontWeight: "bold", marginTop: "15px" }}>
                Project Responsibilities
              </div>
              <ul>
                {project.projectResponsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
              <div style={{ display: "flex" }}>
                {project.tech_stack.map((tech) => (
                  <div
                    key={tech}
                    style={{
                      border: "2px solid #ebb400",
                      padding: "0.7rem",
                      marginRight: "8px",
                      borderRadius: "20px",
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div
            style={{
              marginTop: "16px",
              height: "0",
              borderBottom: "0.5px dashed white",
            }}
          ></div>
        </div>
      ))}
    </>
  );
};

export default WorkExp;
