import { baseUrl } from "../config";

const ACCESS_TOKEN = "ACCESS_TOKEN";
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const submitLogin = (email, password) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (res.ok) {
    const { token } = await res.json();
    document.cookie(`${ACCESS_TOKEN}=${token}`);
    dispatch(setToken(token));
  }
};

export const submitSignUp = (firstName, lastName, email, password) => async (
  dispatch
) => {
  const res = await fetch(`${baseUrl}/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, email, password }),
  });

  if (res.ok) {
    const { token } = await res.json();
    document.cookie(`${ACCESS_TOKEN}=${token}`);
    dispatch(setToken(token));
  }
};
