import { redirect as htmlRedirect } from "./html-utility";

export const isLocalHost = () => {
  return location.hostname === "localhost" || location.hostname === "127.0.0.1";
};

export const isHttps = url => {
  const currentUrl = typeof url === "string" ? new URL(url) : url;
  return currentUrl.protocol === "https:";
};

export const getHttpsUrl = url => {
  const currentUrl = new URL(url);
  if (!isHttps(currentUrl)) {
    return "https:" + url.substring(currentUrl.protocol.length);
  }
  return url;
};

export const forceHttps = currentUrl => {
  const httpsUrl = getHttpsUrl(currentUrl);
  if (httpsUrl !== currentUrl && !isLocalHost()) {
    htmlRedirect(httpsUrl);
  }
};
export const toAbsoluteUrl = (relative, baseUrl = null) => {
  // https://stackoverflow.com/questions/14780350/convert-relative-path-to-absolute-using-javascript#answer-14780463
  if (!baseUrl) {
    baseUrl = window.location.origin;
  }
  const stack = baseUrl.split("/");
  const parts = relative.split("/");
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] !== ".") {
      if (parts[i] === "..") {
        stack.pop();
      } else {
        stack.push(parts[i]);
      }
    }
  }
  return stack.join("/");
};

export const toQueryString = obj => {
  return Object.entries(obj)
    .map(
      entry => `${encodeURIComponent(entry[0])}=${encodeURIComponent(entry[1])}`
    )
    .join("&");
};

// utility
export default {
  isLocalHost,
  getHttpsUrl,
  forceHttps,
  toQueryString
};
