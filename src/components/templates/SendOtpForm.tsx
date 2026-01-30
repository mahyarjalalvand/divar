import { sendOtp } from "@/services/auth";
// import React, { useActionState } from "react";
import { toast } from "sonner";
interface SendOtpType {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  mobile: string;
  setMobile: React.Dispatch<React.SetStateAction<string>>;
}

function SendOtpForm({ setStep, mobile, setMobile }: SendOtpType) {
  const submitHandler = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mobile.length < 10) return;
    console.log("send");
    const { response, error } = await sendOtp(mobile);

    if (response) {
      setMobile(mobile);
      toast.success("کد تایید با موفقیت ارسال شد");
      setStep(2);
      return { ok: true };
    }
    toast.error(typeof error === "string" ? error : error?.message);
    return { ok: false, error };
  };

  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>برای استفاده از امکانات دیوار لطفا شماره خود را وارد کنید . کد تایید به این شماره پیامک خواهد شد</span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
      <input
        type="text"
        name="phoneNumber"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;
