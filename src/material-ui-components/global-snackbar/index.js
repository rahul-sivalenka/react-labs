import { Button } from "@material-ui/core";
import React from "react";
import GlobalSnackbar from "./GlobalSnackbar";
import { useSnackbar, withSnackbar } from "./snackbarContext";

const GlobalSnackbarDemo = () => {
  console.log("GlobalSnackbarDemo called");
  const { showInfo, showSuccess, showError, showWarning } = useSnackbar();

  const showMessage = type => {
    const message = `Global message: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    switch (type) {
      case "success":
        showSuccess(message);
        break;
      case "warning":
        showWarning(message);
        break;
      case "error":
        showError(message);
        break;
      case "info":
        showInfo(message);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Button onClick={() => showMessage("info")}>Show Info</Button>
      <Button onClick={() => showMessage("success")}>Show Success</Button>
      <Button onClick={() => showMessage("warning")}>Show Warning</Button>
      <Button onClick={() => showMessage("error")}>Show Error</Button>

      <GlobalSnackbar />
    </div>
  );
};

export default withSnackbar(GlobalSnackbarDemo);
