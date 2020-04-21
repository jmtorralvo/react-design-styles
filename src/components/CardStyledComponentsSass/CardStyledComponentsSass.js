import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.scss';

const CardStyledComponentsSass = (props) => {
 // const [cardTheme, setCardTheme] = useState(waterTheme);

  // const handleClick = () => {
  //   cardTheme.name === "water"
  //     ? setCardTheme(pinkTheme)
  //     : setCardTheme(waterTheme);
  // };
  // const handleCheckboxChange = () => {
  //   cardTheme.name === "water"
  //     ? setCardTheme(pinkTheme)
  //     : setCardTheme(waterTheme);
  // };

  return (
    <div className="cardWrapper">
      <header></header>
      <div class='cardBody'>
        <fieldset>
          <input placeholder="Username" type="text" required></input>
        </fieldset>
        <fieldset>
          <input placeholder="E-mail" type="text" required></input>
        </fieldset>
        <fieldset>
          <input placeholder="Password" type="text" required></input>
          <span class="icon input-icon small">
            <FontAwesomeIcon icon="eye" />
          </span>
        </fieldset>
        <fieldset>
          <small>Or sign up with</small>
        </fieldset>
        <ul class="rrss-list">
          <li>
            <span class="icon big">
              <FontAwesomeIcon icon={["fab", "google"]} />
            </span>
          </li>
          <li>
            <span class="icon big">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </span>
          </li>
          <li>
            <span class="icon big">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardStyledComponentsSass;
