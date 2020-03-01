import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

//check token and load user
export const loadUser = () => (dispatch, getState) => {
  //user loading
  dispatch(setUserLoading());
  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

//register user

export const register = ({ name, email, password }) => dispatch => {
  //header
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  //body
  const body = JSON.stringify({ name, email, password });
  axios
    .post("/api/users", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

//login User

export const login = ({ email, password }) => dispatch => {
  //header
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  //body
  const body = JSON.stringify({ email, password });
  axios
    .post("/api/auth", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

//Logout user
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

//setup config headers and tokens
export const tokenConfig = getState => {
  //get token from localstorage
  const token = getState().auth.token;

  //headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //if token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
export const setUserLoading = () => {
  return { type: USER_LOADING };
};
