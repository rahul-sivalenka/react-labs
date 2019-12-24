import { createMuiTheme } from "@material-ui/core";

const defaultColorScheme = {
  primary: {
    light: "#757ce8",
    main: "#ff9900", // Change this color to make changes to UI
    dark: "#ff9900", // Change this color to make changes to UI
    contrastText: "#fff"
  },
  secondary: {
    light: "#ff7961",
    main: "#808080", // Change this color to make changes to UI
    dark: "#808080", // Change this color to make changes to UI
    contrastText: "#000"
  }
};

const theme = createMuiTheme({
  palette: defaultColorScheme
});

export default theme;
