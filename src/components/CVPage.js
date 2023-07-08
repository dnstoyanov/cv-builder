import React from "react";
import data from "../data/data.json";
import ProfilePic from "../assets/images/ffs.jpg";
import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { FaLinkedin, FaGithub, FaRegCalendarAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaJira, FaTasks } from "react-icons/fa";
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

export const CVPage = () => {
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
    <Box padding={5}>
      <Grid container>
        <Grid item xs={12}>
          <Stack direction="row" alignContent="center" alignItems="center">
            <Avatar
              sx={{
                width: "300px",
                height: "300px",
                border: "18px solid #444",
                WebkitBoxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.8)",
                MozBoxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.8)",
                boxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              alt="Profile Picture"
              src={ProfilePic}
            ></Avatar>

            <Stack direction="column" sx={{ ml: 8 }}>
              <Typography variant="h1" sx={{ fontWeight: "bold" }}>
                {data.personal_information.name}
              </Typography>
              <Typography variant="h4">
                {data.personal_information.current_position}
              </Typography>
              <Typography sx={{ mt: 3 }}>
                {data.personal_information.about_me}
              </Typography>
              <Stack direction="row" marginTop={2} spacing={6}>
                <Stack direction="row" alignItems="center">
                  <FaGithub
                    size={25}
                    style={{ color: "#ebb400", marginRight: "8px" }}
                  />
                  <a
                    href={data.personal_information.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.personal_information.github_url}
                  </a>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <FaLinkedin
                    size={25}
                    style={{ color: "#ebb400", marginRight: "8px" }}
                  />
                  <a
                    href={data.personal_information.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.personal_information.linkedin_url}
                  </a>
                </Stack>

                <Stack direction="row" alignItems="center">
                  <FiMail
                    size={25}
                    style={{ color: "#ebb400", marginRight: "8px" }}
                  />
                  <a
                    href={`mailto:${data.personal_information.email_address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.personal_information.email_address}
                  </a>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Grid container xs={12} marginTop={1} spacing={10}>
        <Grid item xs={8}>
          <Typography variant="h5">Professional Experience</Typography>

          <Divider
            sx={{
              backgroundColor: "white",
              height: "0",
              borderBottom: "0.5px solid white",
            }}
          />

          <Stack direction="column">
            {data.work_history.map((item) => (
              <Stack direction="column">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  marginTop={3}
                >
                  <Stack sx={{ fontSize: "18px" }}>{item.position}</Stack>
                  <Stack direction="row" alignItems="center">
                    <FaRegCalendarAlt
                      size={14}
                      style={{ color: "#ebb400", marginRight: "4px" }}
                    />
                    <Stack sx={{ fontSize: "14px" }}>{item.start_date}</Stack>
                    <Box mx={0.4} />
                    <Typography variant="body1"> - </Typography>
                    <Box mx={0.4} />
                    <Stack sx={{ fontSize: "14px" }}>{item.end_date}</Stack>
                    <FaLocationDot
                      size={14}
                      style={{
                        color: "#ebb400",
                        marginRight: "4px",
                        marginLeft: "35px",
                      }}
                    />
                    <Stack sx={{ fontSize: "14px" }}>{item.location}</Stack>
                  </Stack>
                </Stack>
                <Stack
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#ebb400",
                    textTransform: "uppercase",
                  }}
                >
                  {item.company}
                </Stack>
                <Stack marginTop={4}>{item.jobDescription}</Stack>
                {item.projects.map((project) => (
                  <Stack direction="column" spacing={2} marginTop={2}>
                    <Stack
                      sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                    >
                      {project.project_name}
                    </Stack>
                    <Stack>{project.project_description}</Stack>
                    <Stack>{project.project_outcome}</Stack>
                    <Stack fontWeight="bold">Project Responsibilities</Stack>
                    <ul>
                      {project.projectResponsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                    <Stack direction="row">
                      {project.tech_stack.map((tech) => (
                        <Stack
                          key={tech}
                          sx={{
                            border: "2px solid #ebb400",
                            p: 0.7,
                            mr: 2,
                            borderRadius: "20px",
                          }}
                        >
                          {tech}
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                ))}
                <Stack
                  sx={{
                    marginTop: 4,
                    height: "0",
                    borderBottom: "0.5px dashed white",
                  }}
                />
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">Skills</Typography>
          <Divider
            sx={{
              backgroundColor: "white",
              height: "0",
              borderBottom: "0.5px solid white",
            }}
          />
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

          <Typography variant="h5" marginTop={10}>
            Certifications
          </Typography>
          <Divider
            sx={{
              backgroundColor: "white",
              height: "0",
              borderBottom: "0.5px solid white",
            }}
          />
          {data.certifications.map((item) => (
            <Stack>
              <Stack
                sx={{
                  fontSize: "18px",
                  color: "#ebb400",
                }}
                marginTop={3}
              >
                {item.name}
              </Stack>
              {item.organisation}
            </Stack>
          ))}
          <Typography variant="h5" marginTop={10}>
            Languages
          </Typography>
          <Divider
            sx={{
              backgroundColor: "white",
              height: "0",
              borderBottom: "0.5px solid white",
            }}
          />
          {data.languages.map((item) => (
            <Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                marginTop={3}
              >
                <Stack
                  sx={{
                    fontSize: "18px",
                    color: "#ebb400",
                  }}
                >
                  {item.name}
                </Stack>
                {item.level}
              </Stack>
            </Stack>
          ))}

          <Typography variant="h5" marginTop={10}>
            Education
          </Typography>
          <Divider
            sx={{
              backgroundColor: "white",
              height: "0",
              borderBottom: "0.5px solid white",
            }}
          />
          {data.education.map((item) => (
            <Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                marginTop={3}
              >
                <Stack
                  sx={{
                    fontSize: "18px",
                    color: "#ebb400",
                    textTransform: "uppercase",
                  }}
                >
                  {item.place}
                </Stack>
                <Stack direction="row" alignItems="flex-start">
                  <FaRegCalendarAlt
                    size={14}
                    style={{ color: "#ebb400", marginRight: "4px" }}
                  />
                  <Stack sx={{ fontSize: "14px" }}>{item.start_date}</Stack>
                  <Box mx={0.4} />
                  <Typography variant="body1"> - </Typography>
                  <Box mx={0.4} />
                  <Stack sx={{ fontSize: "14px" }}>{item.end_date}</Stack>
                  <FaLocationDot
                    size={14}
                    style={{
                      color: "#ebb400",
                      marginRight: "4px",
                      marginLeft: "35px",
                    }}
                  />
                  <Stack sx={{ fontSize: "14px" }}>{item.location}</Stack>
                </Stack>
              </Stack>
              <Stack>{item.degree}</Stack>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CVPage;
