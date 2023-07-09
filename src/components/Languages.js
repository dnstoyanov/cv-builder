import data from "../data/data.json";
import { Stack } from "@mui/material";

const Languages = () => {
  return (
    <>
      {data.languages.map((item) => (
        <Stack>
          <Stack direction="row" justifyContent="space-between" marginTop={3}>
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
    </>
  );
};

export default Languages;
