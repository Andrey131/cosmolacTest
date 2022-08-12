import s from "./Header.module.css";
import React, { useState } from "react";
import { ReactComponent as CosmolacLogo } from "../../images/COSMOLAC.svg";
import { ReactComponent as SearchLogo } from "../../images/Vector.svg";

type PropsType = {};

const Header: React.FC<PropsType> = (props) => {
  const [searchState, setSeatchState] = useState(false);

  const searchOnclick = () => {
    searchState ? setSeatchState(false) : setSeatchState(true);
  };

  return (
    <div>
      <div className={s.title}>
        <CosmolacLogo />
      </div>
      <div>
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
          <li className={s.navbarSelectedItem}>
            <a href="#">Получить выгодные условия</a>
          </li>
          <li onClick={searchOnclick}>
            <SearchLogo />
          </li>
        </ul>
      </div>

      <div
        className={
          searchState
            ? s.searchBlokContainer
            : `${s.searchBlokContainer} ${s.searchBlokContainerHidden}`
        }
      >
        <input
          placeholder={"Введите текст для поиска"}
          className={s.searchBlok}
        />
      </div>
    </div>
  );
};

export default Header;
