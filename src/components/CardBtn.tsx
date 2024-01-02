import styled from "styled-components";



export function CardBtn() {
  return (
    <div>
      <StyledBtn type='button'>See more</StyledBtn>
      <SecondButton type='button'>Save</SecondButton>
    </div>
  );
}


const StyledBtn = styled.button`

  box-sizing: border-box;
  width: 86px;
  height: 30px;
  border: none;
  border-radius: 5px;

  margin: auto;
  padding:0;
  margin-left: 10px;

  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;

  background-color: #4E71FE;
  color: #fff;
 
  &:hover {
   border: 2px solid #4E71FE;
   background-color: transparent;
   color: #4E71FE; 
}
  
`;

const SecondButton = styled(StyledBtn)`

margin-left: 12px;
border: 2px solid #4E71FE;
background-color: transparent;
color: #4E71FE;

&:hover {
  border: none;
  background-color: #4E71FE;
  color: #fff; 
}

`