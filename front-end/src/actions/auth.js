import { baseUrl } from "../config";

export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setToken = (token, userId) => ({
  type: SET_TOKEN,
  token,
  userId,
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});

export const submitLogin = (email, password) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/users/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (res.ok) {
    const { token, userId } = await res.json();
    document.cookie = `${ACCESS_TOKEN}=${token}`;
    dispatch(setToken(token, userId));
  }
};

export const submitSignUp = (firstName, lastName, email, password) => async (
  dispatch
) => {
  const res = await fetch(`${baseUrl}/users`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, email, password }),
  });

  if (res.ok) {
    const { token, userId } = await res.json();
    document.cookie = `${ACCESS_TOKEN}=${token}`;
    dispatch(setToken(token, userId));
  }
};

function getCookieValue(value) {
  const match = document.cookie.match("(^|;)\\s*" + value + "\\s*=\\s*([^;]+)");
  return match ? match.pop() : null;
}

export const hasAccessToken = () => (dispatch) => {
  const token = getCookieValue(ACCESS_TOKEN);
  dispatch(setToken(token));
};
