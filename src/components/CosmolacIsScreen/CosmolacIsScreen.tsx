import s from "./CosmolacIsScreen.module.css";
import { RefObject, useEffect } from "react";
import React from "react";
import "@fontsource/montserrat";
import Benefit from "./Benefit/Benefit";
import firstImage from "../../images/CosmolacIsScreen/1.png";
import secondImage from "../../images/CosmolacIsScreen/2.png";
import thirdImage from "../../images/CosmolacIsScreen/3.png";
import fourthImage from "../../images/CosmolacIsScreen/4.png";
import fifthImage from "../../images/CosmolacIsScreen/5.png";

type PropsType = {};

const CosmolacIsScreen: React.FC<PropsType> = (props) => {
  return (
    <div className={s.container}>
      <div>
        <div className={s.h1}>Cosmolac - это:</div>
        <div className={s.benefitsContainer}>
          <div className={s.rowContainer}>
            <Benefit
              image={firstImage}
              body={
                <div>
                  Собственный завод
                  <br />и лаборатория
                </div>
              }
            />
            <Benefit
              image={secondImage}
              body={
                <div>
                  Полный цикл
                  <br />
                  тестирования продуктов
                </div>
              }
            />
            <Benefit
              image={thirdImage}
              body={
                <div>
                  Широкий ассортимент
                  <br />и уникальная палитра
                </div>
              }
            />
          </div>
          <div className={s.rowContainer}>
            <Benefit
              image={fourthImage}
              body={
                <div>
                  Штат технологов,
                  <br />
                  колористов и nail-мастеров
                </div>
              }
            />
            <Benefit
              image={fifthImage}
              body={
                <div>
                  Постоянный контроль
                  <br />
                  технологического процесса
                </div>
              }
            />
          </div>
          <div className={s.buttonContainer}>
            <div className={s.button}>Стать представителем</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmolacIsScreen;
