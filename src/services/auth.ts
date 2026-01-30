const sendOtp = async (mobile: string) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}auth/send-otp`, {
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
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}auth/check-otp`, {
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
export { sendOtp, checkOtp };
