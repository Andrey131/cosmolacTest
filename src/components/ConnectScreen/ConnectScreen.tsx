import s from "./ConnectScreen.module.css";
import { RefObject, useEffect } from "react";
import React from "react";
import "@fontsource/montserrat";

import telegram from "../../images/connect/Telegram.svg";
import viber from "../../images/connect/Viber.svg";
import whatsApp from "../../images/connect/WhatsApp.svg";

type PropsType = {};

const ConnectScreen: React.FC<PropsType> = (props) => {
  return (
    <div className={s.background}>
      <div className={s.h1}>Связаться с менеджером Cosmolac</div>
      <div className={s.phone}>+7 931 106 33 94</div>
      <div className={s.socials}>
        <img src={whatsApp}></img>
        <img src={telegram}></img>
        <img src={viber}></img>
      </div>
      <div className={s.buttonContainer}>
        <div className={s.button}>Хочу стать клиентом</div>
      </div>
    </div>
  );
};

export default ConnectScreen;
