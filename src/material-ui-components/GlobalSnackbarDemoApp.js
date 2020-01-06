import { Button } from "@material-ui/core";
import React from "react";
import { GlobalSnackbar, useSnackbar, withSnackbar } from "./global-snackbar";

const DemoChild = () => {
  const { showInfo, showSuccess, showError, showWarning } = useSnackbar();

  return (
    <div>
      <Button onClick={() => showInfo("This is an info message")}>
        Show Info
      </Button>
      <Button onClick={() => showSuccess("This is a success message")}>
        Show Success
      </Button>
      <Button onClick={() => showWarning("This is a warning message")}>
        Show Warning
      </Button>
      <Button onClick={() => showError("This is an error message")}>
        Show Error
      </Button>
    </div>
  );
};

const GlobalSnackbarDemoApp = () => {
  console.log("GlobalSnackbarDemoApp called");

  return (
    <div>
      {/* Either wrap the root component with "SnackbarProvider" or use the "withSnackbar" higher order component. Do not use both in the same component. */}

      {/* <SnackbarProvider> */}
      <DemoChild />

      <GlobalSnackbar />
      {/* </SnackbarProvider> */}
    </div>
  );
};

export default withSnackbar(GlobalSnackbarDemoApp);
