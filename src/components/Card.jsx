import { useContext } from 'react';
import { ThemeContext } from '../App';

import stylesa from './card.module.css';
import { IoIosSearch } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import Delivery from '../assets/images/delivery.png';
import cabbage from '../assets/images/spinach-PVB3BJ8.png';
import carrot from '../assets/images/fresh.png';

function Card() {
  const theme = useContext(ThemeContext);

  function handleChangeTheme(event) {
    theme.setTheme(event.target.value);
    localStorage.setItem('theme', event.target.value);
  }

  return (
    <div className={`${stylesa.navbar} ${theme.theme === 'light' ? stylesa.light : stylesa.dark}`}>
      <div className={stylesa.your}>
        <div className={stylesa.come}>
          <h2>Let your <span className={stylesa.spn}>groceries</span> come to you</h2>
          <p>Get fresh groceries online without stepping out to make delicious food with the freshest ingredients</p>
        </div>
        <div className={stylesa.inputw}>
          <input type="text" placeholder='Search here'/>
          <IoIosSearch className={stylesa.search} />
        </div>
        <div className={stylesa.fresh}>
          <div className={stylesa.link}>
            <GoCheck className={stylesa.check} />
            <h4>Fresh Vegetables</h4>
          </div>
          <div className={stylesa.link}>
            <GoCheck className={stylesa.check} />
            <h4>100% Guarantee</h4>
          </div>
          <div className={stylesa.link}>
            <GoCheck className={stylesa.check} />
            <h4>Cash on Delivery</h4>
          </div>
          <div className={stylesa.link}>
            <GoCheck className={stylesa.check} />
            <h4>Fast Delivery</h4>
          </div>
        </div>
      </div>
      <div className={stylesa.images}>
        <img src={Delivery} alt="Delivery" />
      </div>
      <div className={stylesa.card}>
        <div className={stylesa.card_user}>
          <img src={cabbage} alt="Fresh Spinach" />
          <h3>Fresh Spinach</h3>
          <h4>$12.00</h4>
        </div>
        <div className={stylesa.card_user}>
          <img src={carrot} alt="Fresh Carrot" />
          <h3>Fresh Carrot</h3>
          <h4>$9.00</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
