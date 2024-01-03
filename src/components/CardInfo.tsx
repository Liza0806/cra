import styled from "styled-components"
import { myTheme } from "../styles/Theme.styled";


interface CardInfoProps {
  title: string;
  text: string;
}


export function CardInfo(cardProps: CardInfoProps){
    return (
      <>
        <StyledTitle>{cardProps.title}</StyledTitle>
       <StyledCardInfo> 
        <StyledAbout>{cardProps.text}</StyledAbout>
     </StyledCardInfo>
     </>
    )
  }

  const StyledAbout = styled.p`

  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${myTheme.colors.textColor.light};
  `

  const StyledTitle = styled.h3`

  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19.36px;
  color: ${myTheme.colors.textColor.dark};
  margin: 20px 0 20px 10px;
  `

  const StyledCardInfo = styled.div`
  
  height: 40px;
  padding: 0px 10px;
  margin-bottom: 20px;

  `