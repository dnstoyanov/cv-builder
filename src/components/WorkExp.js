import data from "../data/data.json";
import { Box, Stack, Typography } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const WorkExp = () => {
  return (
    <>
      {data.work_history.map((item) => (
        <Stack direction="column">
          <Stack direction="row" justifyContent="space-between" marginTop={3}>
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
              <Stack sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
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
    </>
  );
};

export default WorkExp;
