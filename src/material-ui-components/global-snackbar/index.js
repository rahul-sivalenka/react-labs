import { Button } from "@material-ui/core";
import React from "react";
import GlobalSnackbar from "./GlobalSnackbar";
import { useSnackbar, withSnackbar } from "./snackbarContext";

const GlobalSnackbarDemo = () => {
  console.log("GlobalSnackbarDemo called");
  const { showInfo } = useSnackbar();
  return (
    <div>
      <Button
        onClick={() =>
          showInfo(
            `Global message: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
          )
        }
      >
        Show Global Message
      </Button>

      <GlobalSnackbar />
    </div>
  );
};

export default withSnackbar(GlobalSnackbarDemo);
