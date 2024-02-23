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
  FaBootstrap,
} from "react-icons/fa";
import { SiMui, SiAdobe } from "react-icons/si";
import { BiLogoFigma } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const skillIcons = {
    JavaScript: (
      <FaJs size={16} style={{ color: "#afcf46", marginRight: "4px" }} />
    ),
    React: (
      <FaReact size={16} style={{ color: "#afcf46", marginRight: "4px" }} />
    ),
    "React Native": (
      <FaReact size={16} style={{ color: "#afcf46", marginRight: "4px" }} />
    ),
    "Next.js": (
      <SiNextdotjs size={16} style={{ color: "#afcf46", marginRight: "4px" }} />
    ),
    HTML: (
      <FaHtml5 size={16} style={{ color: "#afcf46", marginRight: "4px" }} />
    ),
    CSS: (
      <FaCss3Alt size={16} style={{ color: "#afcf46", marginRight: "4px" }} />
    ),
    SASS: <FaSass size={16} style={{ color: "#afcf46", marginRight: "4px" }} />,
    Bootstrap: (
      <FaBootstrap size={16} style={{ color: "#afcf46", marginRight: "4px" }} />
    ),
    TypeScript: (
      <SiTypescript
        size={16}
        style={{ color: "#afcf46", marginRight: "4px" }}
      />
    ),
    Redux: (
      <TbBrandRedux
        size={16}
        style={{ color: "#afcf46", marginRight: "4px" }}
      />
    ),
  };

  const additionalSkillsIcons = {
    "Adobe Creative Suite": (
      <SiAdobe size={16} style={{ color: "#afcf46", marginRight: "4px" }} />
    ),
    Git: (
      <FaGithub size={16} style={{ color: "#afcf46", marginRight: "4px" }} />
    ),
    Jira: <FaJira size={16} style={{ color: "#afcf46", marginRight: "4px" }} />,
    Agile: (
      <FaTasks size={16} style={{ color: "#afcf46", marginRight: "4px" }} />
    ),
    Figma: (
      <BiLogoFigma size={16} style={{ color: "#afcf46", marginRight: "4px" }} />
    ),
    "Material UI": (
      <SiMui size={16} style={{ color: "#afcf46", marginRight: "4px" }} />
    ),
  };

  const skillContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginTop: "8px",
  };

  const skillItemStyle = {
    display: "flex",
    alignItems: "center",
    marginRight: "16px",
    marginBottom: "8px",
    flexBasis: "auto",
  };

  return (
    <>
      {data.skills.map((skill, index) => (
        <div key={index}>
          {skill.programmingSkills && (
            <div style={{ marginTop: "24px" }}>
              <div style={{ color: "#afcf46", fontWeight: "bold" }}>
                Programming Skills
              </div>
              <div style={skillContainerStyle}>
                {skill.programmingSkills.map((item) => (
                  <div key={item} style={skillItemStyle}>
                    {skillIcons[item] || (
                      <FaCode
                        size={16}
                        style={{ color: "#afcf46", marginRight: "4px" }}
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
              <div style={{ color: "#afcf46", fontWeight: "bold" }}>
                Additional Skills
              </div>
              <div style={skillContainerStyle}>
                {skill.additionalSkills.map((item) => (
                  <div key={item} style={skillItemStyle}>
                    {additionalSkillsIcons[item] || (
                      <FaCode
                        size={16}
                        style={{ color: "#afcf46", marginRight: "4px" }}
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
              <div style={{ color: "#afcf46", fontWeight: "bold" }}>
                Soft Skills
              </div>
              <div style={skillContainerStyle}>
                {skill.softSkills.map((item) => (
                  <div key={item} style={skillItemStyle}>
                    {item}
                  </div>
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
