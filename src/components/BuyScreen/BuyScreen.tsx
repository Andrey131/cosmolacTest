import s from "./BuyScreen.module.css";
import { RefObject, useEffect } from "react";
import React from "react";
import "@fontsource/montserrat";
import ozonLogo from "../../images/banners/ozonBanner.svg";
import wbLogo from "../../images/banners/wbBanner.svg";
import ozonNailPolish from "../../images/banners/ozonNailPolish.svg";
import wbNailPolish from "../../images/banners/wbNailPolish.svg";

type PropsType = {};

const BuyScreen: React.FC<PropsType> = (props) => {
  return (
    <div className={s.background}>
      <div className={s.bannersContainer}>
        <div className={`${s.ozonFrame}  ${s.frame}`}>
          <img src={ozonLogo} className={s.logo}></img>
          <img src={ozonNailPolish} className={s.nailPolish}></img>
          <div className={s.button}>Купить на OZON</div>
        </div>
        <div className={`${s.wbFrame} ${s.frame}`}>
          <img src={wbLogo} className={s.logo}></img>
          <img src={wbNailPolish} className={s.nailPolish}></img>
          <div className={s.button}>Купить на WB</div>
        </div>
      </div>
      <div className={s.text}>
        Акриловая пудра | База | Гели для наращивания ногтей | Гель для страз |
        Гель-краска | Гель-лак | Гель-лак наборы | Гель-лак с поталью | Гель-лак
        Фликер | Гель-паста | Дорожные наборы | Жидкая слюда | Кошачий глаз |
        Кошачий глаз 9D | Масло для кутикулы | Мужская коллекция | Набор для
        маникюра | Набор для моделирования | Полигель | Праймер | Средства для
        удаления кутикулы | Топ
      </div>
    </div>
  );
};

export default BuyScreen;
