import data from "../data/data.json";
import { Stack } from "@mui/material";

import { FaJira, FaTasks, FaGithub } from "react-icons/fa";
import { SiMui, SiAdobe } from "react-icons/si";
import { BiLogoFigma } from "react-icons/bi";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaCode,
} from "react-icons/fa";
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
            <Stack marginTop={3}>
              <Stack sx={{ color: "#ebb400" }}>Programming Skills</Stack>
              <Stack direction="row" spacing={3} marginTop={1}>
                {skill.programmingSkills.map((item) => (
                  <Stack key={item} direction="row">
                    {skillIcons[item] || <FaCode />} {item}
                  </Stack>
                ))}
              </Stack>
            </Stack>
          )}
          {skill.additionalSkills && (
            <Stack marginTop={3}>
              <Stack sx={{ color: "#ebb400" }}>Additional Skills</Stack>
              <Stack direction="row" spacing={3} marginTop={1}>
                {skill.additionalSkills.map((item) => (
                  <Stack key={item} direction="row">
                    {additionalSkillsIcons[item] || <FaCode />} {item}
                  </Stack>
                ))}
              </Stack>
            </Stack>
          )}
          {skill.softSkills && (
            <Stack marginTop={3}>
              <Stack sx={{ color: "#ebb400" }}>Soft Skills</Stack>
              <Stack direction="row" spacing={3} marginTop={1}>
                {skill.softSkills.map((item) => (
                  <Stack key={item}>{item}</Stack>
                ))}
              </Stack>
            </Stack>
          )}
        </div>
      ))}
    </>
  );
};

export default Skills;
