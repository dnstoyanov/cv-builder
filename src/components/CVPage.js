import React from "react";
import data from "../data/data.json";
import ProfilePic from "../assets/images/ffs.jpg";
import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { FaLinkedin, FaGithub, FaRegCalendarAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
export const CVPage = () => {
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
      <Grid container xs={12} marginTop={8} spacing={2}>
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
          <Typography variant="h5">P</Typography>
          <Divider
            sx={{
              backgroundColor: "white",
              height: "0",
              borderBottom: "0.5px solid white",
            }}
          />
          <Stack direction="column">
            <Stack>TEST2</Stack>
          </Stack>
        </Grid>
      </Grid>

      <h2>Education</h2>
      {data.education.map((item, index) => (
        <div key={index}>
          <p>School: {item.school}</p>
          <p>Degree: {item.degree}</p>
        </div>
      ))}
    </Box>
  );
};

export default CVPage;
