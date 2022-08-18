import s from "./MailingScreen.module.css";
import React, { useState } from "react";
import "@fontsource/montserrat";
import CheckBox from "../common/CheckBox/CheckBox";

type PropsType = {};

const MailingScreen: React.FC<PropsType> = (props) => {
  const [mail, setMail] = useState("");
  const [checkBox1, setCheckBox1] = useState(true);
  const [checkBox2, setCheckBox2] = useState(true);

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
      setMailError("Указан неверный e-mail");
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
        <div className={s.inputContainer}>
          <input
            className={s.input}
            type="text"
            value={mail}
            placeholder={"Введите ваш e-mail"}
            onChange={mailHandler}
          />
          {mailError && <div className={s.error}>{mailError}</div>}
          <button type="submit" className={s.submitButton}></button>
        </div>
        <CheckBox
          label={<div>"Я даю согласие на рассылку"</div>}
          checkBoxHandler={checkBoxHandler1}
          border="gray"
          color="black"
          checked={checkBox1}
        />
        <CheckBox
          label={
            <div>
              Я даю согласие на обработку персональных данных.
              <br />
              Ознакомиться с политикой конфиденциальности.
            </div>
          }
          checkBoxHandler={checkBoxHandler2}
          border="gray"
          color="black"
          checked={checkBox2}
        />
      </form>
    </div>
  );
};

export default MailingScreen;
