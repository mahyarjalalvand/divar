import React from "react";
interface SendOtpType {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setMobile: React.Dispatch<React.SetStateAction<string>>;
  mobile: string;
}

function SendOtpForm({ setStep, mobile, setMobile }: SendOtpType) {
  // console.log(setStep)
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mobile.length !== 11) return;
    setStep(2);
  };

  // todo change form structure (React.js 19.2)
  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>برای استفاده از امکانات دیوار لطفا شماره خود را وارد کنید . کد تایید به این شماره پیامک خواهد شد</span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
      <input type="text" id="input" placeholder="شماره موبایل" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;
