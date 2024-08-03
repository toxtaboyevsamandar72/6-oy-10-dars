import { useContext } from "react";
import styles from "./header.module.css";
import { SlBasket } from "react-icons/sl";
import { ThemeContext } from "../App";
import Card from "./Card";
import { useTranslation } from "react-i18next";

function Home() {
  const theme = useContext(ThemeContext);
  const {t, i18n} = useTranslation();

  function handleChangeTheme(event) {
    theme.setTheme(event.target.value);
    localStorage.setItem("theme", event.target.value);
  }
  function handleLanguach(event) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div
      className={`${styles.headercontainer} ${
        theme.theme === "light" ? styles["light"] : styles["darks"]
      }`}
    >
      <div className={styles.logo}>
        <h1 className={styles.finest}>
          Finest<span className={styles.mart}>Mart</span>
        </h1>
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <a className={styles.ho} href="#">
              {t('Home')}
            </a>
          </li>
          <li>
            <a href="#">{t('Categories')}</a>
          </li>
          <li>
            <a href="#">{t('Sales')}</a>
          </li>
          <li>
            <a href="#">{t('FAQ')}</a>
          </li>
          <li>
            <a href="#">{t('About')}</a>
          </li>
          <li>
            <a href="#">{t('Contact')}</a>
          </li>
        </ul>
      </nav>
      <div className={styles.dark}>
        <h1>
          <SlBasket />
        </h1>
        <select onChange={handleLanguach} className={styles.select}>
          <option value="uz">Uzb</option>
          <option value="ru">Rus</option>
          <option value="en">Eng</option>
        </select>
        <select
          value={theme.theme}
          onChange={handleChangeTheme}
          className={styles.darc}
        >
          <option className={styles.sam} value="light">
          {t('Light')}
          </option>
          <option className={styles.sam} value="dark">
            {t('Dark')}
          </option>
        </select>
      </div>
      <div className={styles.navbardar}>
        <Card />
      </div>
    </div>
  );
}

export default Home;
