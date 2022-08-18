import s from "./PointScreen.module.css";
import { RefObject, useEffect } from "react";
import React from "react";
import "@fontsource/montserrat";
import image from "../../images/woman.png";
import triangle from "../../images/triangle.svg";

type PropsType = {};

const PointScreen: React.FC<PropsType> = (props) => {
  return (
    <div className={s.background}>
      <div className={s.container}>
        <div className={`${s.h1} ${s.itemContainer}`}>
          Точка роста вашего бизнеса
        </div>
        <div className={`${s.h2} ${s.itemContainer}`}>
          бренд, который
          <br />
          продает сам себя
        </div>
        <img
          className={s.triangle}
          src={triangle}
          alt="бренд, который продает сам себя"
        />
        <div className={s.button}>Хочу стать партнёром</div>
      </div>
      <img className={s.immage} src={image} alt="logo" />
    </div>
  );
};

export default PointScreen;
