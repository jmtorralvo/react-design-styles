import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeProvider } from "styled-components";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  // EditedText,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink,
  CardBigButton,
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
  waterTheme,
  pinkTheme,
} from "./style";

const Card = (props) => {
  const [cardTheme, setCardTheme] = useState(waterTheme);

  const handleClick = () => {
    cardTheme.name === "water"
      ? setCardTheme(pinkTheme)
      : setCardTheme(waterTheme);
  };
  const handleCheckboxChange = () => {
    cardTheme.name === "water"
      ? setCardTheme(pinkTheme)
      : setCardTheme(waterTheme);
  };
  console.log(cardTheme.name);
  return (
    <CardWrapper>
      <ThemeProvider theme={cardTheme}>
        <CardHeader img={"./freedomia.jpeg"}></CardHeader>
        <CardBody>
          <CardFieldset>
            <CardInput placeholder="Username" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="E-mail" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Password" type="password" required />
            <CardIcon eye small>
              <FontAwesomeIcon icon="eye" />
            </CardIcon>
          </CardFieldset>

          <CardFieldset>
            <CardOptionsNote>Or sign up with</CardOptionsNote>

            <CardOptions>
              <CardOptionsItem>
                <CardIcon big>
                  <FontAwesomeIcon icon={["fab", "google"]} />
                </CardIcon>
              </CardOptionsItem>

              <CardOptionsItem>
                <CardIcon big>
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </CardIcon>
              </CardOptionsItem>

              <CardOptionsItem>
                <CardIcon big>
                  <FontAwesomeIcon icon={["fab", "facebook"]} />
                </CardIcon>
              </CardOptionsItem>
            </CardOptions>
          </CardFieldset>

          <CardFieldset>
            <CardButton round type="button" onClick={(e) => handleClick(e)}>
              Sign Up
            </CardButton>
            <CardBigButton round type="button" secondary>
              Login
            </CardBigButton>
          </CardFieldset>
          <CardFieldset>
            <CardLink>I already have an account</CardLink>
          </CardFieldset>
          <CardHeading theme={cardTheme}>Freedomi</CardHeading>
          {/* <EditedText text='pepito'/> */}
          <CardFieldset>
            <CheckBoxWrapper>
              <CheckBox
                id="checkbox"
                type="checkbox"
                onChange={handleCheckboxChange}
              />
              <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
          </CardFieldset>
        </CardBody>
      </ThemeProvider>
    </CardWrapper>
  );
};

export default Card;
