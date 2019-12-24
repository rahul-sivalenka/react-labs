import {
  REMOVE_OLD_MESSAGES,
  SHOW_ERROR,
  SHOW_INFO,
  SHOW_SUCCESS,
  SHOW_WARNING
} from "./snackbarActionTypes";

export const showInfo = dispatch => message =>
  dispatch({
    type: SHOW_INFO,
    message
  });

export const showSuccess = dispatch => message =>
  dispatch({
    type: SHOW_SUCCESS,
    message
  });

export const showWarning = dispatch => message =>
  dispatch({
    type: SHOW_WARNING,
    message
  });

export const showError = dispatch => message =>
  dispatch({
    type: SHOW_ERROR,
    message
  });

export const removeOldMessages = dispatch => () =>
  dispatch({
    type: REMOVE_OLD_MESSAGES
  });
