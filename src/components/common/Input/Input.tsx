import s from "./Input.module.css";
import { useState } from "react";

interface IInput {
  error: string;
  placeholder: string;
  value: string;
  handler: (e: any) => void;
  border?: "gray" | "none";
  color?: "white" | "black";
}

const Input = ({
  error,
  placeholder,
  value,
  handler,
  border,
  color,
}: IInput) => {
  const [isChecked, setIsChecked] = useState();

  return (
    <div className={s.inputContainer}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className={!error ? `${s.input}` : `${s.input} ${s.inputError}`}
        onChange={handler}
      />
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
};
export default Input;
