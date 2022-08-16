import s from "./InNumbersScreen.module.css";
import { RefObject, useEffect } from "react";
import React from "react";
import "@fontsource/montserrat";
import Benefit from "./Benefit/Benefit";

type PropsType = {};

const InNumbersScreen: React.FC<PropsType> = (props) => {
  return (
    <div className={s.background}>
      <div className={s.container}>
        <div className={s.h1}>cosmolac в цифрах</div>
        <div className={s.benefitsContainer}>
          <Benefit image="3+" body="новинок каждый месяц" />
          <Benefit image="600+" body="позиций в ассортименте" />
          <Benefit image="15+" body="стран-партнеров Cosmolac" />
          <Benefit image="1000+" body="профильных магазинов" />
        </div>
        <div className={s.button}>Получить выгодные цены</div>
      </div>
    </div>
  );
};

export default InNumbersScreen;
