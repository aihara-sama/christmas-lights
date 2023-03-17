import { Box } from "@mui/material";
import Lamp from "./common/Lamp";

const ChristmasLights = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100px",
        overflow: "hidden",
        flexWrap: "nowrap",
        backgroundColor: "black",
      }}
    >
      {new Array(64).fill(0).map((_, idx) => (
        <Lamp key={idx} />
      ))}
    </Box>
  );
};

export default ChristmasLights;
