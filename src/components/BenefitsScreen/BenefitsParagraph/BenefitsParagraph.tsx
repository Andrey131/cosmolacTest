import s from "./BenefitsParagraph.module.css";
import { RefObject, useEffect } from "react";
import React from "react";
import "@fontsource/montserrat";

interface PropsType {
  image: string;
  body: string;
}

const BenefitsParagraph: React.FC<PropsType> = ({ image, body }) => {
  return (
    <div className={s.container}>
      <div className={s.numberContainer}>
        <img src={image} alt="logo" />
      </div>
      <div className={s.h1}>{body}</div>
    </div>
  );
};

export default BenefitsParagraph;
