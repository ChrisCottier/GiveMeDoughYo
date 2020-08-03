export const hasAccessToken = () => {
  const cookiesString = document.cookie;

  if (!cookies) {
    return false;
  }

  const tokenIndex = cookiesString.indexOf("ACCESS_TOKEN=");

  if (tokenIndex === -1 || tokenIndex === cookiesString.length - 1) {
    return false;
  }

  if (cookiesString[tokenIndex + 1] === " ") {
    return false;
  }

  return true;
};
