import s from "./BenefitsScreen.module.css";
import { RefObject, useEffect } from "react";
import React from "react";
import "@fontsource/montserrat";
import BenefitsParagraph from "./BenefitsParagraph/BenefitsParagraph";
import firstImage from "../../images/BenefitsScreen/1.png";
import secondImage from "../../images/BenefitsScreen/2.png";
import thirdImage from "../../images/BenefitsScreen/3.png";
import fourthImage from "../../images/BenefitsScreen/4.png";
import fifthImage from "../../images/BenefitsScreen/5.png";
import rackImage from "../../images/BenefitsScreen/rack.png";
import firstImageMobile from "../../images/BenefitsScreen/1mob.png";
import secondImageMobile from "../../images/BenefitsScreen/2mob.png";
import thirdImageMobile from "../../images/BenefitsScreen/3mob.png";
import fourthImageMobile from "../../images/BenefitsScreen/4mob.png";
import fifthImageMobile from "../../images/BenefitsScreen/5mob.png";

type PropsType = {};

const BenefitsScreen: React.FC<PropsType> = (props) => {
  return (
    <div className={s.container}>
      <div className={s.rackImageContainer}>
        <img className={s.rackImage} src={rackImage} alt="logo" />
      </div>
      <div className={s.contentContainer}>
        <div className={s.h1}>
          преимущества
          <br />
          сотрудничества
        </div>
        <div className={s.itemsContainer}>
          <div className={s.columnContainer}>
            <BenefitsParagraph
              image={firstImage}
              mobileImage={firstImageMobile}
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
              mobileImage={secondImageMobile}
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
              mobileImage={thirdImageMobile}
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
              mobileImage={fourthImageMobile}
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
              mobileImage={fifthImageMobile}
              body={
                <div>
                  Сертификаты
                  <br />
                  на всю продукцию
                </div>
              }
            />
            <div className={s.buttonContainer}>
              <div className={s.button}>Узнать условия</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsScreen;
