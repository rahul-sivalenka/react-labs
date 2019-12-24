import React, { createContext, useContext, useReducer } from "react";
import {
  removeOldMessages,
  showError,
  showInfo,
  showSuccess,
  showWarning
} from "./snackbarActions";
import { snackbarReducer } from "./snackbarReducer";

const SnackbarContext = createContext(null);

const initialMessageQueue = [];

export const SnackbarProvider = ({ children }) => {
  return (
    <SnackbarContext.Provider
      value={useReducer(snackbarReducer, initialMessageQueue)}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

export const withSnackbar = Component => props => {
  return (
    <SnackbarProvider>
      <Component {...props} />
    </SnackbarProvider>
  );
};

export const useSnackbar = () => {
  const [messageQueue, dispatch] = useContext(SnackbarContext);

  return {
    showInfo: showInfo(dispatch),
    showSuccess: showSuccess(dispatch),
    showWarning: showWarning(dispatch),
    showError: showError(dispatch),
    removeOldMessages: removeOldMessages(dispatch),
    currentMessage: messageQueue[0]
  };
};
