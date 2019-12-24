import {
  IconButton,
  Slide,
  Snackbar,
  SnackbarContent
} from "@material-ui/core";
import { amber, green } from "@material-ui/core/colors";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useSnackbar } from "./snackbarContext";

const SlideTransition = props => {
  return <Slide {...props} direction="down" />;
};

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const useContentWrapperStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    // backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[400],
    color: "#000"
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

const SnackbarContentWrapper = ({
  messageInfo,
  onClose,
  className = "",
  ...other
}) => {
  const classes = useContentWrapperStyles({});

  if (!messageInfo) {
    return null;
  }

  const { key, variant, message } = messageInfo;

  const Icon = variantIcon[variant];
  const messageId = `message-${key}`;

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby={messageId}
      message={
        <span id={messageId} className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
};

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

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
    removeOldMessages();
  };

  return (
    <Snackbar
      key={messageInfo ? messageInfo.key : undefined}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      onExited={handleExited}
    >
      <SnackbarContentWrapper onClose={handleClose} messageInfo={messageInfo} />
    </Snackbar>
  );
};

export default GlobalSnackbar;
