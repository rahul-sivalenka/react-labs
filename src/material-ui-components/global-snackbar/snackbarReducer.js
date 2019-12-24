import {
  REMOVE_OLD_MESSAGES,
  SHOW_ERROR,
  SHOW_INFO,
  SHOW_SUCCESS,
  SHOW_WARNING
} from "./snackbarActionTypes";

export const snackbarReducer = (messageQueue, action) => {
  const { type, message } = action;

  switch (type) {
    case SHOW_SUCCESS:
      messageQueue = [
        {
          message,
          key: new Date().getTime(),
          variant: "success"
        },
        ...messageQueue
      ];
      break;
    case SHOW_ERROR:
      messageQueue = [
        {
          message,
          key: new Date().getTime(),
          variant: "error"
        },
        ...messageQueue
      ];
      break;
    case SHOW_WARNING:
      messageQueue = [
        {
          message,
          key: new Date().getTime(),
          variant: "warning"
        },
        ...messageQueue
      ];
      break;
    case SHOW_INFO:
      messageQueue = [
        {
          message,
          key: new Date().getTime(),
          variant: "info"
        },
        ...messageQueue
      ];
      break;
    case REMOVE_OLD_MESSAGES:
      const messageInfo = messageQueue[0];
      messageQueue = messageInfo ? [messageInfo] : [];
      break;
    default:
      break;
  }

  return messageQueue;
};
