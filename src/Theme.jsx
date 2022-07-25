import { createTheme } from "@mui/material/styles";

const themeOptions = createTheme({
  typography: {
    h2: {
      "@media (max-width:457px)": {
        fontSize: "2.2rem",
      },
    },
    h5: {
      "@media (max-width:457px)": {
        fontSize: "1.2rem",
      },
    },
    h6: {
      "@media (max-width:457px)": {
        fontSize: "1rem",
      },
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#001d44",
    },
    secondary: {
      main: "#ff3d00",
    },
  },
});

export default themeOptions;
