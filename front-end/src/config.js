export const backendUrl =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";
export const baseUrl =
  process.env.REACT_APP_BACKEND_BASEURL || `${backendUrl}/api`;
