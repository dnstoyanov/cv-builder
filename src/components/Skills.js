import data from "../data/data.json";

import {
  FaJira,
  FaTasks,
  FaGithub,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaCode,
} from "react-icons/fa";
import { SiMui, SiAdobe } from "react-icons/si";
import { BiLogoFigma } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  const skillIcons = {
    JavaScript: (
      <FaJs size={16} style={{ color: "#ebb400", marginRight: "4px" }} />
    ),
    React: (
      <FaReact size={16} style={{ color: "#ebb400", marginRight: "4px" }} />
    ),
    HTML: (
      <FaHtml5 size={16} style={{ color: "#ebb400", marginRight: "4px" }} />
    ),
    CSS: (
      <FaCss3Alt size={16} style={{ color: "#ebb400", marginRight: "4px" }} />
    ),
    SASS: <FaSass size={16} style={{ color: "#ebb400", marginRight: "4px" }} />,
    TypeScript: (
      <SiTypescript
        size={16}
        style={{ color: "#ebb400", marginRight: "4px" }}
      />
    ),
  };

  const additionalSkillsIcons = {
    "Adobe Creative Suite": (
      <SiAdobe size={16} style={{ color: "#ebb400", marginRight: "4px" }} />
    ),
    Git: (
      <FaGithub size={16} style={{ color: "#ebb400", marginRight: "4px" }} />
    ),
    Jira: <FaJira size={16} style={{ color: "#ebb400", marginRight: "4px" }} />,
    Agile: (
      <FaTasks size={16} style={{ color: "#ebb400", marginRight: "4px" }} />
    ),
    Figma: (
      <BiLogoFigma size={16} style={{ color: "#ebb400", marginRight: "4px" }} />
    ),
    "Material UI": (
      <SiMui size={16} style={{ color: "#ebb400", marginRight: "4px" }} />
    ),
  };

  return (
    <>
      {data.skills.map((skill, index) => (
        <div key={index}>
          {skill.programmingSkills && (
            <div style={{ marginTop: "24px" }}>
              <div style={{ color: "#ebb400" }}>Programming Skills</div>
              <div style={{ display: "flex", marginTop: "8px" }}>
                {skill.programmingSkills.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "16px",
                    }}
                  >
                    {skillIcons[item] || (
                      <FaCode
                        size={16}
                        style={{ color: "#ebb400", marginRight: "4px" }}
                      />
                    )}{" "}
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
          {skill.additionalSkills && (
            <div style={{ marginTop: "24px" }}>
              <div style={{ color: "#ebb400" }}>Additional Skills</div>
              <div style={{ display: "flex", marginTop: "8px" }}>
                {skill.additionalSkills.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "16px",
                    }}
                  >
                    {additionalSkillsIcons[item] || (
                      <FaCode
                        size={16}
                        style={{ color: "#ebb400", marginRight: "4px" }}
                      />
                    )}{" "}
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
          {skill.softSkills && (
            <div style={{ marginTop: "24px" }}>
              <div style={{ color: "#ebb400" }}>Soft Skills</div>
              <div style={{ display: "flex", marginTop: "8px" }}>
                {skill.softSkills.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Skills;
