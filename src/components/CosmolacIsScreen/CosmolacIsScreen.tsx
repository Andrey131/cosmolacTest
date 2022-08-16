import s from "./CosmolacIsScreen.module.css";
import { RefObject, useEffect } from "react";
import React from "react";
import "@fontsource/montserrat";
import Benefit from "./Benefit/Benefit";
import firstImage from "../../images/CosmolacIsScreen/1.svg";
import secondImage from "../../images/CosmolacIsScreen/2.svg";
import thirdImage from "../../images/CosmolacIsScreen/3.svg";
import fourthImage from "../../images/CosmolacIsScreen/4.svg";
import fifthImage from "../../images/CosmolacIsScreen/5.svg";

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
              body="Собственный завод и лаборатория"
            />
            <Benefit
              image={secondImage}
              body="Полный цикл тестирования продуктов"
            />
            <Benefit
              image={thirdImage}
              body="Широкий ассортимент и уникальная палитра"
            />
          </div>
          <div className={s.rowContainer}>
            <Benefit
              image={fourthImage}
              body="Штат технологов, колористов и nail-мастеров"
            />
            <Benefit
              image={fifthImage}
              body="Постоянный контроль технологического процесса"
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
