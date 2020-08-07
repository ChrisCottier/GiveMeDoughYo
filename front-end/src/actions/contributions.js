import { baseUrl } from "../config";

export const SUCCESSFUL_CONTRIBUTION = "SUCCESSFUL_CONTRIBUTION";
export const FAILED_CONTRIBUTION = "FAILED_CONTRIBUTION";

const successfulContribution = (amount, title) => ({
  type: SUCCESSFUL_CONTRIBUTION,
  amount,
  title,
});

const failedContribution = (amount, title) => ({
  type: FAILED_CONTRIBUTION,
  amount,
  title,
});

export const submitContribution = (
  rawAmount,
  campaignId,
  title,
  token
) => async (dispatch) => {
  const amount = Math.floor(rawAmount);
  const res = await fetch(`${baseUrl}/contributions`, {
    method: "post",

    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ campaignId, amount }),
  });

  if (res.ok) {
    const contribution = await res.json();

    dispatch(successfulContribution(amount, title));
  } else {
    const fail = await res.json();

    dispatch(failedContribution(amount, title));
  }
};
