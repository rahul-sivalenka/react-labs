import { Button, IconButton, Slide, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

const SlideTransition = props => {
  return <Slide {...props} direction="down" />;
};

const GlobalSnackbar = () => {
  const classes = useStyles({});
  const [messageInfo, setMessageInfo] = useState(null);
  const [open, setOpen] = useState(false);

  const showMessage = () => {
    setMessageInfo({
      message: "Test Message",
      key: new Date().getTime()
    });

    setOpen(true);
  };

  const handleClose = (event, reason) => {
    console.log("TCL: handleClose -> args", event, reason);
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleExited = () => {
    console.log("TCL: handleExited");
  };

  const messageId = messageInfo ? `message-${messageInfo.key}` : "message-id";

  return (
    <div>
      <Button onClick={showMessage}>Show Message</Button>

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
    </div>
  );
};

export default GlobalSnackbar;
