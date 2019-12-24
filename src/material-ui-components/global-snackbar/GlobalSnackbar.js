import { IconButton, Slide, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { useSnackbar } from "./snackbarContext";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

const SlideTransition = props => {
  return <Slide {...props} direction="down" />;
};

const GlobalSnackbar = () => {
  console.log("GlobalSnackbar called");

  const classes = useStyles({});
  const [messageInfo, setMessageInfo] = useState(null);
  const [open, setOpen] = useState(false);
  const { currentMessage, removeOldMessages } = useSnackbar();

  useEffect(() => {
    console.log("currentMessage changed", currentMessage);
    if (currentMessage) {
      setMessageInfo(currentMessage);
      setOpen(true);
    }
  }, [currentMessage]);

  const handleClose = (event, reason) => {
    console.log("TCL: handleClose -> args", event, reason);
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleExited = () => {
    console.log("TCL: handleExited");
    // if (open) {
    //   setOpen(false);
    // }
    removeOldMessages();
  };

  const messageId = messageInfo ? `message-${messageInfo.key}` : "message-id";

  return (
    <Snackbar
      key={messageInfo ? messageInfo.key : undefined}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      TransitionComponent={SlideTransition}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      onExited={handleExited}
      ContentProps={{
        "aria-describedby": messageId
      }}
      message={
        <span id={messageId}>
          {messageInfo ? messageInfo.message : undefined}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};

export default GlobalSnackbar;
