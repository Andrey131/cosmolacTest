import s from "./CheckBox.module.css";
import { useState } from "react";

interface ICheckBox {
  label: JSX.Element;
  checkBoxHandler: (e: any) => void;
  border?: "gray" | "none";
  color?: "white" | "black";
  checked: boolean;
}

const CheckBox = ({
  label,
  checkBoxHandler,
  border,
  color,
  checked,
}: ICheckBox) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <div
      className={`${s.checkboxWrapper} ${
        border == "gray" && s.checkboxWrapperGray
      }`}
    >
      <label
        className={`${s.checkboxContainer} ${
          color == "black" && s.checkboxContainerBlack
        }`}
      >
        <input
          type="checkbox"
          checked={isChecked}
          className={isChecked ? s.checked : ""}
          onChange={(e) => {
            setIsChecked((prev) => !prev);
            checkBoxHandler(e);
          }}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default CheckBox;
