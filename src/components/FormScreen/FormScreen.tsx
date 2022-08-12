import s from "./FormScreen.module.css";
import { RefObject, useEffect, useState } from "react";
import React from "react";
import "@fontsource/montserrat";

const FormScreen = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [deal, setDeal] = useState("");
  const [checkBox, setCheckBox] = useState("false");

  const [nameError, setNameError] = useState("");
  const [cityError, setCityError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [mailError, setMailError] = useState("");

  const handleSubmit = (e: any) => {
    alert(name);
  };

  const nameHandler = (e: any) => {
    setName(e.target.value);
  };

  const cityHandler = (e: any) => {
    setCity(e.target.value);
  };

  const phoneHandler = (e: any) => {
    setPhone(e.target.value);
  };

  const mailHandler = (e: any) => {
    setMail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setMailError("Некоректный email");
    } else {
      setMailError("");
    }
  };

  const dealHandler = (e: any) => {
    setDeal(e.target.value);
  };

  const checkBoxHandler = (e: any) => {
    setCheckBox(e.target.value);
  };

  return (
    <div className={s.background}>
      <div className={s.container}>
        <div className={s.h1}>Зарабатывайте вместе с Cosmolac</div>
        <div className={s.h2}>
          Мы свяжемся с Вами, вышлем индивидуальный прайс и предложим выгодные
          условия сотрудничества
        </div>
        <div className={s.formContainer}>
          <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.container}>
              <input
                onChange={nameHandler}
                type="text"
                value={name}
                placeholder={"Имя*"}
                className={s.input}
              />
              <input
                type="text"
                value={city}
                placeholder={"Город*"}
                className={s.input}
                onChange={cityHandler}
              />
              <input
                type="text"
                value={phone}
                placeholder={"+7*"}
                className={s.input}
                onChange={phoneHandler}
              />
              {mailError && <div style={{ color: "red" }}>{mailError}</div>}
              <input
                type="text"
                value={mail}
                placeholder={"Электронная почта*"}
                className={s.input}
                onChange={mailHandler}
              />
              <select
                size={1}
                name="hero[]"
                className={s.input}
                onChange={dealHandler}
              >
                <option selected disabled>
                  Ваш тип бизнеса
                </option>
                <option value="Дистрибьютор">Дистрибьютор</option>
                <option value="Интернет-магазин">Интернет-магазин</option>
                <option value="Мастер">Мастер</option>
                <option value="Планирую открытие магазина">
                  Планирую открытие магазина
                </option>
                <option value="Планирую открытие салона">
                  Планирую открытие салона
                </option>
                <option value="Профессиональный магазин">
                  Профессиональный магазин
                </option>
                <option value="Салон красоты">Салон красоты</option>
                <option value="Учебный центр">Учебный центр</option>
                <option value="Физическое лицо">Физическое лицо</option>
              </select>
            </div>
            <div className={s.checkBoxContainer}>
              <input
                type="checkbox"
                value={""}
                className={s.checkBox}
                onChange={checkBoxHandler}
              />
              <div>
                Я даю согласие на обработку персональных данных. Ознакомиться с
                политикой конфиденциальности.
              </div>
            </div>
            <input
              type="submit"
              value="Отправить заявку"
              className={s.submitButton}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormScreen;
