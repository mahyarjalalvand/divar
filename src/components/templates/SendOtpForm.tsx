import { sendOtp } from "@/services/auth";
import React from "react";
import { toast } from "sonner";
interface SendOtpType {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setMobile: React.Dispatch<React.SetStateAction<string>>;
  mobile: string;
}

function SendOtpForm({ setStep, mobile, setMobile }: SendOtpType) {
  const submitHandler = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mobile.length < 10) return;
    const { response, error } = await sendOtp(mobile);

    if (response) {
      toast.success("کد تایید با موفقیت ارسال شد.", { className: "shadow-lg!" });
      setStep(2);
    } else if (error) {
      toast.error("خطا در ارسال کد تایید. لطفا دوباره تلاش کنید.");
      console.error(error);
      return;
    }
  };

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
