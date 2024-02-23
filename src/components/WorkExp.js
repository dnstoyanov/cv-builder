import data from "../data/data.json";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const WorkExp = () => {
  return (
    <>
      {data.work_history.map((item, index) => (
        <div key={index}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "24px",
              alignItems: "flex-start",
            }}
          >
            <div style={{ fontSize: "18px" }}>{item.position}</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "14px", marginRight: "4px" }}>
                <FaRegCalendarAlt
                  size={14}
                  style={{
                    color: "#afcf46",
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
                  color: "#afcf46",
                  marginRight: "4px",
                  marginLeft: "35px",
                }}
              >
                <FaLocationDot
                  size={14}
                  style={{
                    color: "#afcf46",
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
              color: "#afcf46",
              textTransform: "uppercase",
              marginTop: "16px",
            }}
          >
            {item.company}
          </div>
          <div style={{ marginTop: "16px" }}>{item.jobDescription}</div>
          {item.projects.map((project, projectIndex) => (
            <div
              key={projectIndex}
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "36px",
              }}
            >
              <div
                style={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
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
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {project.tech_stack.map((tech) => (
                  <div
                    key={tech}
                    style={{
                      border: "2px solid #afcf46",
                      padding: "0.7rem",
                      marginRight: "8px",
                      borderRadius: "20px",
                      marginTop: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: "36px",
                  height: "0",
                  borderBottom:
                    projectIndex !== item.projects.length - 1
                      ? "0.5px dashed white"
                      : "none",
                }}
              ></div>
            </div>
          ))}
          {index !== data.work_history.length - 1 && (
            <div>
              <hr style={{ border: "2px solid #afcf46", marginTop: "36px" }} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default WorkExp;
