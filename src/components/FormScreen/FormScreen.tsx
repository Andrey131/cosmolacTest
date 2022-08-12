import s from "./FormScreen.module.css";
import { useState } from "react";
import "@fontsource/montserrat";

const FormScreen = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("+7");
  const [mail, setMail] = useState("");
  const [deal, setDeal] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  const [nameError, setNameError] = useState("");
  const [cityError, setCityError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [mailError, setMailError] = useState("");

  const handleSubmit = (e: any) => {
    if (
      name &&
      city &&
      phone &&
      mail &&
      checkBox &&
      !nameError &&
      !cityError &&
      !phoneError &&
      !mailError
    ) {
      alert("Форма отправлена");
    } else {
      alert("Заполните обязательные поля");
      e.preventDefault();
    }
  };

  const nameHandler = (e: any) => {
    setName(e.target.value);
    const re =
      /^(([А-ЯЁа-яё]+[\-\']?)*([А-ЯЁа-яё]+)?\s?)+([А-ЯЁа-яё]+[\-\']?)*([А-ЯЁа-яё]+)?$/;

    if (!re.test(String(e.target.value))) {
      setNameError("Некорректное имя");
    } else {
      setNameError("");
    }
  };

  const cityHandler = (e: any) => {
    setCity(e.target.value);
    const re = /^[А-Яа-я_-]{3,30}$/;

    if (!re.test(String(e.target.value))) {
      setCityError("Некорректный город");
    } else {
      setCityError("");
    }
  };

  const phoneHandler = (e: any) => {
    setPhone(e.target.value);
    const re = /^[+][7]{1}[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (!re.test(String(e.target.value))) {
      setPhoneError("Некорректный номер телефона");
    } else {
      setPhoneError("");
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

  const dealHandler = (e: any) => {
    setDeal(e.target.value);
  };

  const checkBoxHandler = (e: any) => {
    console.log(e);
    setCheckBox(e.target.checked);
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
              {nameError && <div className={s.error}>{nameError}</div>}
              <input
                onChange={nameHandler}
                type="text"
                value={name}
                placeholder={"Имя*"}
                className={s.input}
              />
              {cityError && <div className={s.error}>{cityError}</div>}
              <input
                type="text"
                value={city}
                placeholder={"Город*"}
                className={s.input}
                onChange={cityHandler}
              />
              {phoneError && <div className={s.error}>{phoneError}</div>}
              <input
                type="text"
                value={phone}
                placeholder={"+7*"}
                className={`${s.input} ${s.phoneInput}`}
                onChange={phoneHandler}
              />
              {mailError && <div className={s.error}>{mailError}</div>}
              <input
                type="text"
                value={mail}
                placeholder={"Электронная почта*"}
                className={s.input}
                onChange={mailHandler}
              />
              <select
                size={1}
                name="deal"
                className={s.input}
                onChange={dealHandler}
                value={deal}
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
                checked={checkBox}
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
              className={
                checkBox
                  ? s.submitButton
                  : `${s.submitButton} ${s.submitButtonBlock}`
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormScreen;
