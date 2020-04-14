import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
} from "./style";
const Card = props => {
  return (
    <CardWrapper>
      <CardHeader img={'./freedomia.jpeg'}>
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
          <CardButton round type="button" secondary>Sign Up</CardButton>
          <CardBigButton round type="button" secondary>Login</CardBigButton>
        </CardFieldset>

        <CardFieldset>
          <CardLink>I already have an account</CardLink>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  );
};


export default Card;
