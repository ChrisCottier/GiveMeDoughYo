import { baseUrl } from "../config";

export const USER_PAGE = "USER_PAGE";

const userPage = (userData) => ({
  type: USER_PAGE,
  userData,
});

export const getUserInfo = (id) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/users/${id}`);
  const userData = await res.json();
  if (res.ok) {
    userData.Contributions = userData.Contributions.length;
    // let test = await fetch(userData.profilePic);
    // console.log(test);

    dispatch(userPage(userData));
  }
};
