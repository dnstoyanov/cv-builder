import React from "react";
import data from "../data/data.json";
import ProfilePic from "../assets/images/ffs.jpg";
import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import WorkExp from "./WorkExp";
import Training from "./Training";
import Skills from "./Skills";
import Languages from "./Languages";
import Education from "./Education";
import Certifications from "./Certifications";

export const CVPage = () => {
  return (
    <Box padding={5} sx={{ backgroundColor: "#313131" }}>
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
            <WorkExp />
          </Stack>
          <Typography variant="h5" marginTop={10}>
            Training / Courses
          </Typography>
          <Divider
            sx={{
              backgroundColor: "white",
              height: "0",
              borderBottom: "0.5px solid white",
            }}
          />
          <Training />
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
          <Skills />

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
          <Certifications />
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
          <Languages />
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
          <Education />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CVPage;
