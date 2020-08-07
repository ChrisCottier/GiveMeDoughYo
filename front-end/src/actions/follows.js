import { baseUrl } from "../config";
export const NEW_FOLLOW = "NEW_FOLLOW";

export const submitFollow = (userId, campaignId, token) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/follows`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ userId, campaignId }),
  });

  if (res.ok) {
    const follow = await res.json();
    const { campaignId, followStatus } = follow;
    dispatch({
      type: NEW_FOLLOW,
      campaignId,
      followStatus,
    });
  }
};
