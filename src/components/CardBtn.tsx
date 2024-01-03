import styled, { css } from "styled-components";
import { myTheme } from "../styles/Theme.styled";

type BtnPropsType = {
  btnType: "primary" | "secondary",
  btnText: string

}

export function CardBtn(props: BtnPropsType) {
  return (  
      <StyledBtn type='button' btnType = {props.btnType} btnText={props.btnText}>{props.btnText}</StyledBtn>
  );
}


const StyledBtn = styled.button <BtnPropsType>`
  width: 86px;
  height: 30px;
  border: none; 
  border-radius: 5px;

  margin: auto;

  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;

${props => props.btnType === "primary" && css<BtnPropsType> `
 background-color: ${myTheme.colors.accent};
 color: ${myTheme.colors.background};

  &:hover {
   border: 2px solid ${myTheme.colors.accent};
   background-color: transparent;
   color: ${myTheme.colors.accent};

`}


${props => props.btnType === "secondary" && css<BtnPropsType> `
margin-left: 12px;
border: 2px solid ${myTheme.colors.accent};;
background-color: transparent;
color: ${myTheme.colors.accent};

&:hover {
  border: none;
  background-color: ${myTheme.colors.accent};
  color: ${myTheme.colors.background}; 
}

  
`}
`