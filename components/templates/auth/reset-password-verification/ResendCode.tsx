import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ResendCode() {
  const [timer, setTimer] = useState(120);
  const [isActiveResendBtn, setIsActiveResendBtn] = useState(false);
  const [showTime, setShowTime] = useState("02:00");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);

      const minutes = Math.floor(timer / 60);
      const seconds = timer - minutes * 60;

      setShowTime(
        `${minutes.toString().length === 1 ? `0${minutes}` : minutes} : ${seconds.toString().length === 1 ? `0${seconds}` : seconds}`,
      );

      if (!timer) {
        setIsActiveResendBtn(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const onResend = () => {
    setTimer(120);
    setIsActiveResendBtn(false);
    setShowTime("02:00");

    toast.success("Code sended");
  };

  if (isActiveResendBtn)
    return (
      <button
        type="button"
        className="mt-10 text-xl font-bold text-orange-bg-font-color"
        onClick={onResend}>
        Send another code
      </button>
    );

  return (
    <p className="mt-10 text-xl font-medium text-orange-bg-font-color/65">
      Wait {showTime} to send another code
    </p>
  );
}
