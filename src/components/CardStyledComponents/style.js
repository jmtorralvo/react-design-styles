import styled, { css } from "styled-components";
import Text from '../Text/Text'

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

// TIP: Add an image to the div with props
export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
  height: 250px;
  ${props =>
    props.img &&
    css`
      background-image: url(${props.img});
    `};
`;
// TIP: secondary prop will change the stlye of the Heading
export const CardHeading = styled.span`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.bg};
`;
//TIP : Styling an existing component ---> styled() function means that it under the hood produces a className that 
// it injects into our component Text that we need to set to our top-level element, for it to take effect.
export const EditedText = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #65ccc6
  ${props => props.secondary && css`color: #65ccc6;`}
`;

export const CardBody = styled.div`
  padding: 32px 32px 0 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: ${props => props.theme.bg} 0.25s ease-in;
  &:focus {
    border-bottom-color: ${props => props.theme.bg} ;
    outline: 0;
  }
`;

export const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
  }

  ${props =>
    props.big &&
    css`
      font-size: 26px;
    `}

  ${props =>
    props.eye &&
    css`
      position: absolute;
      top: 8px;
      right: 0;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 14px;
    `}
`;

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

export const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

// TIP: round propr can be  pixels or percentage
export const CardButton = styled.button`
  color: ${props => props.theme.color};
  background: ${props => props.theme.bg}; 
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  border: 0;
  border-radius: ${props => (props.round ? '35px' : '25%')};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
  ${props => props.secondary && css`background: #bebebe;`}
`;

// TIP: Extends a component styles from other

export const CardBigButton = styled(CardButton)`  
  margin-top: 5px;
  color:#514140;
`;

export const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${props=>props.theme.bg};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${props=>props.theme.bg};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

// TIP:Change Styled components: Heritage the component Button styles but change to a Link tag instead using withComponent
export const CardLinkButton = CardButton.withComponent('a');

// TIP: We can define a theme for the components
export const waterTheme = {
  name:'water',
  color: "#0f1f1e",
  bg: "#65ccc6",
  titleColor:"#65ccc6"
};
export const pinkTheme = {
  name:'pink',
  color: "white",
  bg:"#e5195f",
  titleColor:"#e5195f"
}