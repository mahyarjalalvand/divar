const sendOtp = async (mobile) => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + "/auth/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile }),
    });
    return await response.json();
  } catch (error) {}
};
