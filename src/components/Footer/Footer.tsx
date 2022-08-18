import s from "./Footer.module.css";
import React from "react";
import "@fontsource/montserrat";
import { ReactComponent as CosmolacLogo } from "../../images/COSMOLAC.svg";

import tg from "../../images/socials/tg.svg";
import inst from "../../images/socials/inst.svg";
import youtube from "../../images/socials/youtube.svg";
import vk from "../../images/socials/vk.svg";
import tt from "../../images/socials/tt.svg";
import wb from "../../images/socials/wb.svg";
import ozon from "../../images/socials/ozon.svg";
import fb from "../../images/socials/fb.svg";

type PropsType = {};

const Footer: React.FC<PropsType> = (props) => {
  return (
    <div className={s.background}>
      <div className={s.title}>
        <CosmolacLogo />
      </div>
      <div className={s.content}>
        <div className={s.leftBlock}>
          <div>Каталог</div>
          <div>Контакты</div>
          <div>Ответы на вопросы</div>
        </div>
        <div className={s.centerBlock}>
          <div>Мы в соцсетях</div>
          <div className={s.social}>
            <div className={s.socialBlock}>
              <img className={s.icon} src={tg} alt="logo" />
              <img className={s.icon} src={inst} alt="logo" />
              <img className={s.icon} src={youtube} alt="logo" />
              <img className={s.icon} src={vk} alt="logo" />
            </div>
            <div className={s.socialBlock}>
              <img className={s.icon} src={tt} alt="logo" />
              <img className={s.icon} src={wb} alt="logo" />
              <img className={s.icon} src={ozon} alt="logo" />
              <img className={s.icon} src={fb} alt="logo" />
            </div>
          </div>
        </div>
        <div className={s.rightBlock}>
          <div className={s.h1}>
            © 2012-2022 Cosmolac LTD
            <br />
            All rights reserved
          </div>
          <div className={s.h2}>
            * – Компания Meta, социальные сети Facebook и Instagram признаны
            экстремистскими и запрещены на территории РФ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
