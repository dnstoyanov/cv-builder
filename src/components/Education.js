import data from "../data/data.json";
import { Stack, Box, Typography } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <>
      {data.education.map((item) => (
        <Stack>
          <Stack direction="row" justifyContent="space-between" marginTop={3}>
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
    </>
  );
};

export default Education;
