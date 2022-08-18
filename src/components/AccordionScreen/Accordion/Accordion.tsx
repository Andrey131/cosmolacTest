import React, { useEffect, useRef, useState } from "react";
import s from "./Accordion.module.css";
import { ReactComponent as Cross } from "../../../images/cross.svg";

interface PropsType {
  title: string;
  content: string;
}

const hasWindow = typeof window !== "undefined";

const Accordion: React.FC<PropsType> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [accordionContentMargin, setAccordionContentMargin] = useState(1);

  const [size, setSize] = React.useState({});

  const accordionContentRef = useRef<HTMLDivElement | null>(null);

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = accordionContentRef.current || {};
    setSize({ clientHeight, clientWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    accordionContentRef.current &&
      setAccordionContentMargin(-accordionContentRef.current.clientHeight);

    accordionContentRef.current &&
      console.log(accordionContentRef.current.clientHeight);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [size]);

  return (
    <div className={s.accordionItem}>
      <div className={s.accordionTitle} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className={s.crossContainer}>
          <Cross className={isActive ? s.cross : s.crossRotate} />
        </div>
      </div>
      <div
        ref={accordionContentRef}
        style={!isActive ? { marginTop: accordionContentMargin } : undefined}
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
