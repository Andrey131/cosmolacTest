import s from "./Benefit.module.css";
import { RefObject, useEffect } from "react";
import React from "react";
import "@fontsource/montserrat";

interface PropsType {
  image: string;
  body: JSX.Element;
}

const Benefit: React.FC<PropsType> = ({ image, body }) => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <img className={s.image} src={image} alt="logo" />
      </div>
      <div className={s.h1}>{body}</div>
    </div>
  );
};

export default Benefit;
