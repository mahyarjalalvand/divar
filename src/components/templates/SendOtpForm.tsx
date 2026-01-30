import { sendOtp } from "@/services/auth";
import React, { useActionState } from "react";
import { toast } from "sonner";
interface SendOtpType {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setMobile: React.Dispatch<React.SetStateAction<string>>;
}
type OtpState = null | { ok: true } | { ok: false; error: string | null };

function SendOtpForm({ setStep, mobile, setMobile }: SendOtpType) {
  const submitHandler = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mobile.length < 10) return;
    const { response, error } = await sendOtp(mobile);

    if (response) {
      setMobile(phoneNumber);
      setStep(2);
      return { ok: true };
    }
    toast.error(typeof error === "string" ? error : error?.message);
    return { ok: false, error };
  };

  return (
    <form action={submitAction}>
      <p>ورود به حساب کاربری</p>
      <span>برای استفاده از امکانات دیوار لطفا شماره خود را وارد کنید . کد تایید به این شماره پیامک خواهد شد</span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
      <input type="text" name="phoneNumber" id="input" placeholder="شماره موبایل" />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;
