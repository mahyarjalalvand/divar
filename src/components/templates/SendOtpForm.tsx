import { sendOtp } from "@/services/auth";
import React, { useActionState } from "react";
import { toast } from "sonner";
interface SendOtpType {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
type OtpState = null | { ok: true } | { ok: false; error: string | null };

function SendOtpForm({ setStep }: SendOtpType) {
  const [, submitAction] = useActionState(submitHandler, null);

  async function submitHandler(_prvState: OtpState, formData: FormData): Promise<OtpState> {
    const phoneNumber = formData.get("phoneNumber");
    if (typeof phoneNumber !== "string") return { ok: false, error: "شماره موبایل نامعتبر است" };

    const promise = sendOtp(phoneNumber);

    toast.promise(promise, {
      loading: "در حال ارسال کد تایید ...",
      success: "کد تایید با موفقیت ارسال شد",
      error: "خطا در ارسال کد تایید",
    });
    const { response, error } = await promise;
    if (response) {
      setStep(2);
      return { ok: true };
    }
    return { ok: false, error };
  }

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
