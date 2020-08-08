import { baseUrl } from "../config";

export const USER_PAGE = "USER_PAGE";

const userPage = (userData) => ({
  type: USER_PAGE,
  userData,
});

export const getUserInfo = (id) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/users/${id}`);
  if (res.ok) {
    const userData = await res.json();
    console.log(userData);
    userData.Contributions = userData.Contributions.length;
    for (let follow of userData.Follows) {
      let { id, firstName } = follow.User;
      follow.User = { id, firstName };
    }

    dispatch(userPage(userData));
  }
};

export const getProfileInfo = (id, token) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/users/${id}/profile`, {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (res.ok) {
    const userData = await res.json();
    console.log(userData);

    for (let follow of userData.Follows) {
      let { id, firstName } = follow.User;
      follow.User = { id, firstName };
    }

    dispatch(userPage(userData));
  }
};
