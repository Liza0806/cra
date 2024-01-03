import React from 'react';
import { Card } from './components/Card';

 type CardPropsType = {
  title: string;
  text: string;
  img: string;
  hiddenImg: string;
  
} 


function App() {

  const cardProps: CardPropsType = {
    title: "Title",
    text: "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.",
    img: "https://i.postimg.cc/PrkrQsVr/Rectangle.png",
    hiddenImg: 'https://i.postimg.cc/PfD5Dr4R/dimych.png',
  };

  return (
    <div className="App">
      <p>This is react</p>
      <Card {...cardProps}/>

    </div>
  );
}
export default App;