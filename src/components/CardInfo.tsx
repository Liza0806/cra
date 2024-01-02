import styled from "styled-components"

export function CardInfo(){
    return (
      <StyledCardInfo>
        <StyledTitle>Headline</StyledTitle>
        <StyledAbout>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledAbout>
      </StyledCardInfo>
    )
  }

  const StyledAbout = styled.p`

  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #ABB3BA;
  margin: 0;
  
  `

  const StyledTitle = styled.h3`

  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19.36px;
  color: #000000;
  margin: 0 0 20px 0;
  `

  const StyledCardInfo = styled.div`

  width: 260px;
  height: 80px;
  padding: 20px 10px;

  `