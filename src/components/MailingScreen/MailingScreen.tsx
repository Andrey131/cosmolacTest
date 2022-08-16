import s from "./MailingScreen.module.css";
import React, { useState } from "react";
import "@fontsource/montserrat";
import { ReactComponent as CosmolacLogo } from "../../images/COSMOLAC.svg";

type PropsType = {};

const MailingScreen: React.FC<PropsType> = (props) => {
  const [mail, setMail] = useState("");
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);

  const [mailError, setMailError] = useState("");
  const handleSubmit = (e: any) => {
    if (mail && checkBox1 && checkBox2 && !mailError) {
      alert("Форма отправлена");
    } else {
      alert("Заполните обязательные поля");
      e.preventDefault();
    }
  };

  const mailHandler = (e: any) => {
    setMail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setMailError("Некорректный email");
    } else {
      setMailError("");
    }
  };

  const checkBoxHandler1 = (e: any) => {
    console.log(e);
    setCheckBox1(e.target.checked);
  };

  const checkBoxHandler2 = (e: any) => {
    console.log(e);
    setCheckBox2(e.target.checked);
  };

  return (
    <div className={s.background}>
      <div className={s.h1}>ПОДПИШИСЬ НА РАССЫЛКУ</div>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          value={mail}
          placeholder={"Электронная почта*"}
          className={s.input}
          onChange={mailHandler}
        />
        <button type="submit" className={s.submitButton}></button>
        <div className={s.checkBoxContainer}>
          <input
            type="checkbox"
            checked={checkBox1}
            className={s.checkBox}
            onChange={checkBoxHandler1}
          />
          <div>Я даю согласие на рассылку</div>
        </div>
        <div className={s.checkBoxContainer}>
          <input
            type="checkbox"
            checked={checkBox2}
            className={s.checkBox}
            onChange={checkBoxHandler2}
          />
          <div>
            Я даю согласие на обработку персональных данных. Ознакомиться с
            политикой конфиденциальности.
          </div>
        </div>
      </form>
    </div>
  );
};

export default MailingScreen;
