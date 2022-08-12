import s from "./Header.module.css";
import React from "react";
import { ReactComponent as CosmolacLogo } from "../../images/COSMOLAC.svg";

type PropsType = {};

const Header: React.FC<PropsType> = (props) => {
  return (
    <div>
      <div className={s.title}>
        <CosmolacLogo />
      </div>
      <div className={s.navbarContainer}>
        <ul className={s.navbar}>
          <li className={s.navbarItem}>
            <a href="#">Каталог</a>
          </li>
          <li className={s.navbarItem}>
            <a href="#">О COSMOLAC</a>
          </li>
          <li className={s.navbarItem}>
            <a href="#">Блог</a>
          </li>
          <li className={s.navbarItem}>
            <a href="#">Проверка подлинности</a>
          </li>
          <li className={s.navbarItem}>
            <a href="#">Ответы на вопросы</a>
          </li>
          <li className={s.navbarItem}>
            <a href="#">Контакты</a>
          </li>
          <li className={s.navbarItem}>
            <a href="#">Получить выгодные условия</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
