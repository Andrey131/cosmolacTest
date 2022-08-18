import s from "./BenefitsParagraph.module.css";
import { RefObject, useEffect } from "react";
import React from "react";
import "@fontsource/montserrat";

interface PropsType {
  image: string;
  body: JSX.Element;
}

const BenefitsParagraph: React.FC<PropsType> = ({ image, body }) => {
  return (
    <div className={s.container}>
      <div className={s.numberContainer}>2</div>
      <div className={s.h1}>{body}</div>
    </div>
  );
};

export default BenefitsParagraph;
