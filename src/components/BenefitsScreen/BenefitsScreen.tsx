import s from "./BenefitsScreen.module.css";
import { RefObject, useEffect } from "react";
import React from "react";
import "@fontsource/montserrat";
import BenefitsParagraph from "./BenefitsParagraph/BenefitsParagraph";
import firstImage from "../../images/BenefitsScreen/1.svg";
import secondImage from "../../images/BenefitsScreen/2.svg";
import thirdImage from "../../images/BenefitsScreen/3.svg";
import fourthImage from "../../images/BenefitsScreen/4.svg";
import fifthImage from "../../images/BenefitsScreen/5.svg";
import rackImage from "../../images/BenefitsScreen/rack.svg";

type PropsType = {};

const BenefitsScreen: React.FC<PropsType> = (props) => {
  return (
    <div className={s.container}>
      <div className={s.rackImageContainer}>
        <img className={s.rackImage} src={rackImage} alt="logo" />
      </div>
      <div className={s.contentContainer}>
        <div className={s.h1}>преимущества сотрудничества</div>
        <div className={s.itemsContainer}>
          <div className={s.columnContainer}>
            <BenefitsParagraph
              image={firstImage}
              body={
                <div>
                  Цены в 2 раза
                  <br />
                  ниже розничных
                </div>
              }
            />
            <BenefitsParagraph
              image={secondImage}
              body={
                <div>
                  Персональный
                  <br />
                  менеджер
                </div>
              }
            />
            <BenefitsParagraph
              image={thirdImage}
              body={
                <div>
                  Маркетинговая
                  <br />
                  поддержка
                </div>
              }
            />
          </div>
          <div className={s.columnContainer}>
            <BenefitsParagraph
              image={fourthImage}
              body={
                <div>
                  Отгрузка товара
                  <br />
                  за 1-2 дня
                </div>
              }
            />
            <BenefitsParagraph
              image={fifthImage}
              body={
                <div>
                  Сертификаты
                  <br />
                  на всю продукцию
                </div>
              }
            />
            <div className={s.button}>Узнать условия</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsScreen;
