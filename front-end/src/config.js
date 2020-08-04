export const backendUrl =
  process.env.REACT_APP_BACKEND_URL || process.env.NODE_ENV === "production"
    ? "https://givemedoughyo.herokuapp.com/"
    : "http://localhost:8080";
export const baseUrl =
  process.env.REACT_APP_BACKEND_BASEURL || `${backendUrl}/api`;
export const appName = "GiveMeDoughYo";
