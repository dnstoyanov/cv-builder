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
import { BiLogoFigma, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const skillIcons = {
    JavaScript: (
      <FaJs size={22} style={{ color: "#268de0", marginRight: "6px" }} />
    ),
    React: (
      <FaReact size={22} style={{ color: "#268de0", marginRight: "6px" }} />
    ),
    "React Native": (
      <FaReact size={22} style={{ color: "#268de0", marginRight: "6px" }} />
    ),
    "Next.js": (
      <SiNextdotjs size={22} style={{ color: "#268de0", marginRight: "6px" }} />
    ),
    HTML: (
      <FaHtml5 size={22} style={{ color: "#268de0", marginRight: "6px" }} />
    ),
    CSS: (
      <FaCss3Alt size={22} style={{ color: "#268de0", marginRight: "6px" }} />
    ),
    SASS: <FaSass size={22} style={{ color: "#268de0", marginRight: "6px" }} />,
    Bootstrap: (
      <FaBootstrap size={22} style={{ color: "#268de0", marginRight: "6px" }} />
    ),
    TypeScript: (
      <SiTypescript
        size={22}
        style={{ color: "#268de0", marginRight: "6px" }}
      />
    ),
    Redux: (
      <TbBrandRedux
        size={22}
        style={{ color: "#268de0", marginRight: "6px" }}
      />
    ),
    "Tailwind CSS": (
      <BiLogoTailwindCss
        size={22}
        style={{ color: "#268de0", marginRight: "6px" }}
      />
    ),
  };

  const additionalSkillsIcons = {
    "Adobe Creative Suite": (
      <SiAdobe size={22} style={{ color: "#268de0", marginRight: "6px" }} />
    ),
    Git: (
      <FaGithub size={22} style={{ color: "#268de0", marginRight: "6px" }} />
    ),
    Jira: <FaJira size={22} style={{ color: "#268de0", marginRight: "6px" }} />,
    Agile: (
      <FaTasks size={22} style={{ color: "#268de0", marginRight: "6px" }} />
    ),
    Figma: (
      <BiLogoFigma size={22} style={{ color: "#268de0", marginRight: "6px" }} />
    ),
    "Material UI": (
      <SiMui size={22} style={{ color: "#268de0", marginRight: "6px" }} />
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
              <div
                style={{
                  color: "#268de0",
                  fontWeight: "bold",
                  fontSize: "16pt",
                }}
              >
                Programming Skills
              </div>
              <div style={skillContainerStyle}>
                {skill.programmingSkills.map((item) => (
                  <div key={item} style={skillItemStyle}>
                    {skillIcons[item] || (
                      <FaCode
                        size={16}
                        style={{ color: "#268de0", marginRight: "4px" }}
                      />
                    )}{" "}
                    <div className="text-content">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {skill.additionalSkills && (
            <div style={{ marginTop: "45px" }}>
              <div
                style={{
                  color: "#268de0",
                  fontWeight: "bold",
                  fontSize: "16pt",
                }}
              >
                Additional Skills
              </div>
              <div style={skillContainerStyle}>
                {skill.additionalSkills.map((item) => (
                  <div key={item} style={skillItemStyle}>
                    {additionalSkillsIcons[item] || (
                      <FaCode
                        size={16}
                        style={{ color: "#268de0", marginRight: "4px" }}
                      />
                    )}{" "}
                    <div className="text-content">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {skill.softSkills && (
            <div style={{ marginTop: "45px" }}>
              <div
                style={{
                  color: "#268de0",
                  fontWeight: "bold",
                  fontSize: "16pt",
                }}
              >
                Soft Skills
              </div>
              <div style={skillContainerStyle}>
                {skill.softSkills.map((item) => (
                  <div key={item} style={skillItemStyle}>
                    <div className="text-content">{item}</div>
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
