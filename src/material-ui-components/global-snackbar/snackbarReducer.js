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
    case SHOW_ERROR:
    case SHOW_WARNING:
    case SHOW_INFO:
      messageQueue = [
        {
          message,
          key: new Date().getTime()
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
