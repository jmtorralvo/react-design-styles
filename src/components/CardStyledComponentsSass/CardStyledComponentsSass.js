import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles/style.scss';

const CardStyledComponentsSass = (props) => {
 const [cardTheme, setCardTheme] = useState('light');
 document.documentElement.className = '';
 document.documentElement.classList.add(`theme-${cardTheme}`);

  const handleClick = () => {
    cardTheme === 'light'
      ? setCardTheme('dark')
      : setCardTheme('light');

    console.log(cardTheme)
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${cardTheme}`);
  };
  // const handleCheckboxChange = () => {
  //   cardTheme.name === 'dark'
  //     ? setCardTheme('light')
  //     : setCardTheme('dark');
  // };

    console.log(cardTheme);

  return (
    <div className="cardWrapper">
      <header></header>
      <div className='cardBody'>
        <fieldset>
          <input placeholder="Username" type="text" required></input>
        </fieldset>
        <fieldset>
          <input placeholder="E-mail" type="text" required></input>
        </fieldset>
        <fieldset>
          <input placeholder="Password" type="text" required></input>
          <span className="icon input-icon small">
            <FontAwesomeIcon icon="eye" />
          </span>
        </fieldset>
        <fieldset>
          <small>Or sign up with</small>
        </fieldset>
        <fieldset>
          <ul className="rrss-list">
            <li>
              <span className="icon big">
                <FontAwesomeIcon icon={["fab", "google"]} />
              </span>
            </li>
            <li>
              <span className="icon big">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </span>
            </li>
            <li>
              <span className="icon big">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </span>
            </li>
          </ul>
        </fieldset>
        <fieldset className="sign-in-wrapper">
          <button className="button round" onClick={() => handleClick()}>
            Sign Up
          </button>
          <button className="button round secondary" onClick={() => handleClick()}>
            Sign Up
          </button>
        </fieldset>
        <fieldset className="bottom-link-wrapper">
          <a className='generic-link'>I already have an account</a>
          <span className="sub-link">Freedomi</span>
        </fieldset>
        <fieldset>
          <div className="checkbox-wrapper">
            <input 
              id="checkbox2"
              type="checkbox"
              onChange={() => handleClick()}/>
            <label className="checkbox-label" htmlFor="checkbox2"></label>
          </div>
        </fieldset>
        {/* <div className="footer-pop-up">
          <span className="bounce">{cardTheme} theme</span>  
        </div> */}
      </div>
    </div>
  );
};

export default CardStyledComponentsSass;
