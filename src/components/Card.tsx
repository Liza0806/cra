
import  styled  from "styled-components";
import { CardBtn } from "./CardBtn";
import { CardInfo } from "./CardInfo";


export function Card(){
  
    return (
      <StyledCard>
        <StyledImgContainer>
    
       <StyledImg src="https://i.postimg.cc/PrkrQsVr/Rectangle.png" alt="Rectangle"/>
       <HelloImg src='https://i.postimg.cc/PfD5Dr4R/dimych.png' alt='dimych'/>
       
       </StyledImgContainer>
        <CardInfo/>
        <CardBtn/>
      </StyledCard>
    )
  }
 
  const StyledImg = styled.img`

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
 
  `
  const StyledCard = styled.div`

  width: 300px;
  height: 350px;
  box-sizing: border-box;

  margin: auto;
  padding: 10px;
  border-radius: 15px;

  background-color: #fff;
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