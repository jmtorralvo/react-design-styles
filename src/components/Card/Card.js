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
  grassTheme,
  lightTheme,
} from "./style";

const Card = (props) => {
  const [cardTheme, setCardTheme] = useState(lightTheme);

  const handleClick = () => {
    cardTheme.name === 'grass'
      ? setCardTheme(lightTheme)
      : setCardTheme(grassTheme);
  };

  console.log(cardTheme.name);
  return (
    <CardWrapper>
      <CardHeader img={"./freedomia.jpeg"}>
        <CardHeading secondary>Freedomi@</CardHeading>
        {/* <EditedText text='pepito'/> */}
      </CardHeader>
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
          <ThemeProvider theme={cardTheme}>
            <CardButton round type="button"  onClick={e=>handleClick(e)}>
              Sign Up
            </CardButton>
          </ThemeProvider>
          <CardBigButton round type="button" secondary>
            Login
          </CardBigButton>
        </CardFieldset>

        <CardFieldset>
          <CardLink>I already have an account</CardLink>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
};

export default Card;
