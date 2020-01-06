import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "./App.css";
import GlobalSnackbarDemoApp from "./material-ui-components/GlobalSnackbarDemoApp";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export function SimpleTabs({ tabs = [] }) {
  const classes = useStyles({});
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {tabs.map(({ label, id }, i) => (
            <Tab key={id} label={label} {...a11yProps(i)} />
          ))}
        </Tabs>
      </AppBar>

      {tabs.map(({ component, id }, i) => (
        <TabPanel key={`${id}-tab-content`} value={value} index={i}>
          {component}
        </TabPanel>
      ))}
    </div>
  );
}

const tabs = [
  {
    id: "global-snackbar",
    label: "Global Snackbar",
    component: GlobalSnackbarDemoApp
  }
];

function App() {
  return (
    <div className="App">
      <SimpleTabs tabs={tabs} />
    </div>
  );
}

export default App;
