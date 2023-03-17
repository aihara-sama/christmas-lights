import type { SxProps } from "@mui/material";
import { Box } from "@mui/material";
import type { Theme } from "@mui/material/styles";

import { getRandomColor } from "utils/getRandomColor";

const Lamp = () => {
  const randomColor = getRandomColor();

  const containerStyles: SxProps<Theme> = {
    position: "relative",
    width: "18px",
    minWidth: "18px",
    height: "43px",
    backgroundColor: randomColor,
    borderRadius: "50%",
    marginRight: "22px",
    boxShadow: `0px 6px 11px 2px ${randomColor}`,
    "&::before": {
      position: "absolute",
      content: "''",
      width: "16px",
      height: "12px",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      zIndex: "142",
      left: "1px",
      top: "0px",
      backgroundColor: (theme) => theme.palette.secondary.main,
    },
    "&::after": {
      position: "absolute",
      content: "''",
      width: "42px",
      height: "9px",
      borderRadius: "50%",
      border: "2px solid",
      top: "-5px",
      left: "8px",
      borderColor: (theme) => theme.palette.secondary.main,
    },
  };
  return <Box sx={containerStyles}></Box>;
};

export default Lamp;
