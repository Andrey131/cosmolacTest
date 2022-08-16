import s from "./HeadScreen.module.css";
import { RefObject, useEffect } from "react";
import React from "react";
import "@fontsource/montserrat";

type PropsType = {};

const HeadScreen: React.FC<PropsType> = (props) => {
  return (
    <div className={s.background}>
      <div className={s.container}>
        <div className={`${s.h1} ${s.itemContainer}`}>
          Базы, гель-лаки, топы все для маникюра
        </div>
        <div className={`${s.h2} ${s.itemContainer}`}>
          оптовые скидки до 50%
        </div>
        <div className={s.buttonBlock}>
          <div className={`${s.h3} ${s.itemContainer}`}>
            МАГАЗИНАМ, САЛОНАМ и УЧЕБНЫМ ЦЕНТРАМ
          </div>
          <div className={s.button}>Получить оптовый прайс</div>
        </div>
      </div>

      <img className={s.image} src="nailPolish.svg" alt="logo" />
    </div>
  );
};

export default HeadScreen;
