import React, { useState } from "react";
import s from "./Accordion.module.css";
import { ReactComponent as Cross } from "../../../images/cross.svg";

interface PropsType {
  title: string;
  content: string;
}

const Accordion: React.FC<PropsType> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={s.accordionItem}>
      <div className={s.accordionTitle} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className={s.crossContainer}>
          <Cross className={isActive ? s.cross : s.crossRotate} />
        </div>
      </div>
      <div
        className={
          isActive
            ? `${s.accordionContent}`
            : `${s.accordionContent} ${s.accordionContentHidden}`
        }
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
