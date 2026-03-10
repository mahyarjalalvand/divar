import { checkOtp } from "@/services/auth";
import { getProfile } from "@/services/user";
import { setCookie } from "@/utils/cookie";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
interface CheckOtp {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  mobile: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
// todo for login by admin role : 09189990099
// todo / play again 356 in 1 . becuse chekc router for return undefinde

function CheckOtpForm({ code, setCode, mobile, setStep }: CheckOtp) {
  const navigate = useNavigate();
  const { refetch } = useQuery({ queryKey: ["profile"], queryFn: getProfile });

  const submitHandler = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (code.length < 5) return;
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      toast.success("تایید");
      setCookie(response);
      navigate("/");
      refetch();
    } else if (error) {
      toast.error("خطا در تایید کد");
      console.error(error);
      return;
    }
  };
  return (
    <form onSubmit={submitHandler} className="authForms">
      <p>تایید کد ارسال شده</p>
      <span>کد پیامک شده به شماره {mobile} را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input type="text" name="otpCode" id="input" placeholder="کد تایید" onChange={(e) => setCode(e.target.value)} />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)} className="backBtn">
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;
