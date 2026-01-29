import React from "react";
interface CheckOtp {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  mobile: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function CheckOtpForm({ code, setCode, mobile, setStep }: CheckOtp) {
  // todo change form structure (React.js 19.2)
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(code, mobile);
  };
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد ارسال شده</p>
      <span>کد پیامک شده به شماره {mobile} را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input type="text" id="input" placeholder="کد تایید" value={code} onChange={(e) => setCode(e.target.value)} />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
