
import  styled  from "styled-components";
import { CardBtn } from "./CardBtn";
import { CardInfo } from "./CardInfo";
import { myTheme } from "../styles/Theme.styled";



export function Card(props: any){
  
  return (
    <StyledCard>
      <StyledImgContainer>
        <img src={props.img} alt={props.img.match(/\/([^/]+)\.[^.]+$/)[1]} />
        <HelloImg src={props.hiddenImg} alt={props.hiddenImg.match(/\/([^/]+)\.[^.]+$/)[1]} />
      </StyledImgContainer>
      <CardInfo title={props.title} text={props.text} />
      <CardBtn btnType="primary" btnText="See more"/>
      <CardBtn btnType="secondary" btnText="Save"/>
 
    </StyledCard>
  );
  }
 
  
  const StyledCard = styled.div`

  width: 300px;
  box-sizing: border-box;

  margin: auto;
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 15px;

  background-color: ${myTheme.colors.background};
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);

  button {
    cursor: pointer;
  }
   
  `
  const HelloImg = styled.img`
  width: 100px;
  position: absolute;
  left: 30%;
  top: 100%;
  transition: top 0.5s ease;

  `
  const StyledImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  
  &:hover{ 
    ${HelloImg}{
    top: 48%; }
  }
  `