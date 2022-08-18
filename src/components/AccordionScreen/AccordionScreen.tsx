import s from "./AccordionScreen.module.css";
import { RefObject, useEffect } from "react";
import React from "react";
import "@fontsource/montserrat";
import Accordion from "./Accordion/Accordion";

type PropsType = {};

const AccordionScreen: React.FC<PropsType> = (props) => {
  return (
    <div className={s.background}>
      <div className={s.conteiner}>
        <div className={s.title}>Вопрос-ответ</div>
        <Accordion
          title="Что такое COSMOLAC?"
          content="Белорусский производитель гель лаков по уникальной технологии, собственная химическая лаборатория, аналогов в России нет"
        />
        <Accordion
          title="Что входит в ассортимент продукции COSMOLAC?"
          content="Белорусский производитель гель лаков по уникальной технологии, собственная химическая лаборатория, аналогов в России нет"
        />
        <Accordion
          title="Как часто Cosmolac выпускает новинки?"
          content="Белорусский производитель гель лаков по уникальной технологии, собственная химическая лаборатория, аналогов в России нет"
        />
        <Accordion
          title="Как организована доставка продукции COSMOLAC?"
          content="Белорусский производитель гель лаков по уникальной технологии, собственная химическая лаборатория, аналогов в России нет"
        />
        <Accordion
          title="На какой размер оптовой скидки я могу рассчитывать?"
          content="Белорусский производитель гель лаков по уникальной технологии, собственная химическая лаборатория, аналогов в России нет"
        />
        <Accordion
          title="Какую маркетинговую поддержку я получу?"
          content="Белорусский производитель гель лаков по уникальной технологии, собственная химическая лаборатория, аналогов в России нет"
        />
      </div>
    </div>
  );
};

export default AccordionScreen;
