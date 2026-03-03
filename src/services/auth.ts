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
  const res = await fetch(BASE_URL + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (res.status === 401) {
    const refreshToken = getCookie("refreshToken");
    console.log(refreshToken);
    if (!refreshToken) throw new Error("Refresh token missing");

    const refreshRes = await fetch(`${BASE_URL}auth/check-refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!refreshRes.ok) throw new Error("Refresh token expired");

    const tokens = await refreshRes.json();
    setCookie(tokens);

    accessToken = tokens.accessToken;
    return fetch(BASE_URL + url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        ...(options.headers || {}),
      },
    });
  }

  return res;
};
export { sendOtp, checkOtp, fetchWithAuth };
