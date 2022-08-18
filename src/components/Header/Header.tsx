import s from "./Header.module.css";
import React, { useState } from "react";
import { ReactComponent as CosmolacLogo } from "../../images/COSMOLAC.svg";
import { ReactComponent as SearchLogo } from "../../images/Vector.svg";
import { ReactComponent as Burger } from "../../images/burger.svg";
import { ReactComponent as LogoMobile } from "../../images/logoMobile.svg";
import ConnectScreen from "../.././components/ConnectScreen/ConnectScreen";

type PropsType = {};

const Header: React.FC<PropsType> = (props) => {
  const [searchState, setSeatchState] = useState(false);
  const [menuhState, setMenuState] = useState(false);

  const searchOnclick = () => {
    searchState ? setSeatchState(false) : setSeatchState(true);
  };

  const menuOnclick = () => {
    menuhState ? setMenuState(false) : setMenuState(true);
  };

  return (
    <div>
      <div className={s.desktop}>
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
            <li className={s.navbarItem} onClick={searchOnclick}>
              <SearchLogo />
            </li>
          </ul>
        </div>
      </div>

      <div className={s.mobile}>
        <ul className={s.navbar}>
          <li onClick={menuOnclick}>
            <Burger />
          </li>
          <li>
            <LogoMobile />
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

      <div
        className={
          menuhState ? s.mobileMenu : `${s.mobileMenu} ${s.mobileMenuHidden}`
        }
      >
        <ul className={`${s.modileNavbar} ${s.navbar}`}>
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
        </ul>
        <ConnectScreen></ConnectScreen>
      </div>
    </div>
  );
};

export default Header;
