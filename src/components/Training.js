import data from "../data/data.json";
import { Stack } from "@mui/material";

const Training = () => {
  return (
    <>
      {data.training.map((course) => (
        <Stack>
          <Stack
            sx={{
              fontSize: "18px",
              color: "#ebb400",
            }}
            marginTop={3}
          >
            {course.name}
          </Stack>
          {course.description}
        </Stack>
      ))}
    </>
  );
};

export default Training;
