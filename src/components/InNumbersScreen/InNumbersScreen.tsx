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
          <Benefit
            image="3+"
            body={
              <div>
                новинок
                <br />
                каждый месяц
              </div>
            }
          />
          <Benefit
            image="600+"
            body={
              <div>
                позиций
                <br />в ассортименте
              </div>
            }
          />
          <Benefit
            image="15+"
            body={
              <div>
                стран-партнеров
                <br />
                Cosmolac
              </div>
            }
          />
          <Benefit
            image="1000+"
            body={
              <div>
                профильных
                <br />
                магазинов
              </div>
            }
          />
        </div>
        <div className={s.button}>Получить выгодные цены</div>
      </div>
    </div>
  );
};

export default InNumbersScreen;
