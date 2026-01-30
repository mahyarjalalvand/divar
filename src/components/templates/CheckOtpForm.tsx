import { checkOtp } from "@/services/auth";
import setCookie from "@/utils/cookie";
import React from "react";
import { toast } from "sonner";
interface CheckOtp {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  mobile: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function CheckOtpForm({ code, setCode, mobile, setStep }: CheckOtp) {
  const submitHandler = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (code.length < 5) return;
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      toast.success("تایید");
      // console.log(response);
      setCookie(response);
      // setStep(2);
    } else if (error) {
      toast.error("خطا در تایید کد");
      console.error(error);
      return;
    }
  };
  return (
    <form action={submitAction}>
      <p>تایید کد ارسال شده</p>
      <span>کد پیامک شده به شماره {mobile} را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input type="text" name="otpCode" id="input" placeholder="کد تایید" onChange={(e) => setCode(e.target.value)} />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
