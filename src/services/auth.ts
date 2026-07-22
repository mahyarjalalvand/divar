import { getCookie, setCookie } from "@/utils/cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const sendOtp = async (mobile: string) => {
  try {
    const response = await fetch(`${BASE_URL}auth/send-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile }),
    });
    const data = await response.json();
    return {
      response: response.ok ? data : null,
      error: response.ok ? null : data,
    };
  } catch (error) {
    console.log(error);
    return {
      response: null,
      error,
    };
  }
};
const checkOtp = async (mobile: string, code: string) => {
  try {
    const response = await fetch(`${BASE_URL}auth/check-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile, code }),
    });
    const data = await response.json();
    return {
      response: response.ok ? data : null,
      error: response.ok ? null : data,
    };
  } catch (err) {
    console.log(err);
    return {
      response: null,
      err,
    };
  }
};
const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  let accessToken = getCookie("accessToken");

  const sendRequest = (token?: string) =>
    fetch(BASE_URL + url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

  let res = await sendRequest(accessToken);

  if (res.status === 401) {
    const refreshToken = getCookie("refreshToken");

    if (!refreshToken) return res;

    const refreshRes = await fetch(`${BASE_URL}auth/check-refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!refreshRes.ok) return refreshRes;

    const tokens = await refreshRes.json();
    setCookie(tokens);

    accessToken = tokens.accessToken;
    res = await sendRequest(accessToken);
  }

  return res;
};
export { sendOtp, checkOtp, fetchWithAuth };
