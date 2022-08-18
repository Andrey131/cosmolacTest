import s from "./Cookie.module.css";
import { useState } from "react";
import "@fontsource/manrope";

interface ICookie {
  mobile: boolean;
}

const Cookie = ({ mobile = false }: ICookie) => {
  const [isChecked, setIsChecked] = useState();

  return (
    <div className={s.cookie}>
      <div className={s.title}>Мы используем файлы cookie</div>
      <div className={s.button}>Принимаю</div>
    </div>
  );
};
export default Cookie;
