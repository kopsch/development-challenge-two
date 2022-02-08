import { createTheme } from "@material-ui/core";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#023e8a",
      light: "#00b4d8",
      dark: "#03045e",
      contrastText: "#fff",
    },
    secondary: {
      main: "#E0E0E0",
      light: "#E6E6E6",
      dark: "#9C9C9C",
      contrastText: "#505C6E",
    },
    text: {
      primary: "#000",
      secondary: "#505C6E",
    },
  },
});