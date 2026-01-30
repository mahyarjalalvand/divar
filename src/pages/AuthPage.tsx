import { useState } from "react";
import SendOtpForm from "../components/templates/SendOtpForm";
import CheckOtpForm from "../components/templates/CheckOtpForm";

function AuthPage() {
  const [step, setStep] = useState(2);
  const [mobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {step === 1 && <SendOtpForm setStep={setStep} />}
      {step === 2 && <CheckOtpForm code={code} setCode={setCode} mobile={mobile} setStep={setStep} />}
    </div>
  );
}

export default AuthPage;
