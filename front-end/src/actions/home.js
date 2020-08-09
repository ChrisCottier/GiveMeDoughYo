import { baseUrl } from "../config";
export const HOME_PICS = "HOME_PICS";
export const CURRENT_INDEX = "HOME_CURRENT_INDEX";

export const getHomePics = () => async (dispatch) => {
  console.log("action");
  const res = await fetch(`${baseUrl}/home/pics`);

  if (res.ok) {
    const homePics = await res.json();
    dispatch({ type: HOME_PICS, homePics });
  }
};
