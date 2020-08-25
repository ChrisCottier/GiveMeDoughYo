import { baseUrl } from "../config";

export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";
export const SHOW_LOGIN = "SHOW_LOGIN";
export const HIDE_LOGIN = "HIDE_LOGIN";

export const setToken = (token, userId, firstName, profilePic, follows) => ({
  type: SET_TOKEN,
  token,
  userId,
  firstName,
  profilePic,
  follows,
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
    const {
      token,
      userId,
      firstName,
      profilePic,
      Follows: follows,
    } = await res.json();
    document.cookie = `${ACCESS_TOKEN}=${token}`;
    dispatch(setToken(token, userId, firstName, profilePic, follows));
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
    const { token, userId, firstName, profilePic } = await res.json();

    document.cookie = `${ACCESS_TOKEN}=${token}`;
    dispatch(setToken(token, userId, firstName, profilePic));
  }
};

function getCookieValue(value) {
  const match = document.cookie.match("(^|;)\\s*" + value + "\\s*=\\s*([^;]+)");
  return match ? match.pop() : null;
}

export const hasAccessToken = () => async (dispatch) => {
  const token = getCookieValue(ACCESS_TOKEN);

  const res = await fetch(`${baseUrl}/users/restore`, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (res.ok) {
    const details = await res.json();
    if (details !== null) {
      const { id, email, firstName, profilePic, Follows: follows } = details;
      const userId = id;
      if (details.id) {
        dispatch(setToken(token, userId, firstName, profilePic, follows));
      }
    }
  }
};
