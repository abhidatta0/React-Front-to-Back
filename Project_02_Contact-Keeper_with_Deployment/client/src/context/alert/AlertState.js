import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import uuid from 'uuid';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = {
    alerts: []
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Set alert
  const setAlert = (msg, type) => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id }
    });
  };

  //Remove Alert
  const removeAlert = () => {
    dispatch({
      type: REMOVE_ALERT
    });
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        setAlert,
        removeAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
