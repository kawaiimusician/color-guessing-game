import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [rgb, setRgb] = useState({});
  const [answer, setAnswer] = useState([]);
  // const [counter, setCounter] = useState(0)
  const [score, setScore] = useState();

  // rgb picker function - picks 3 random numbers between 0 and 255. stores in state. (does it 4 times.)
  // random pick between 0 and 3 to determine the RGB code that will be the answer, store in answer state
  const getRGB = () => {
    const pickColor = () => {
      let red = Math.floor((Math.random() * 255));
      let green = Math.floor((Math.random() * 255));
      let blue = Math.floor((Math.random() * 255));
      return `rgb(${red}, ${green}, ${blue})`
    };

    let rgbValues = [pickColor(), pickColor(), pickColor(), pickColor()];

    setRgb(rgbValues);

  }

  const pickAnswer = () => {
    let answerIndex = Math.floor((Math.random() * 4));
    setAnswer(answerIndex);
  };

  const playAgain = () => {
    getRGB();
    pickAnswer();
    setScore({ 'wins': 0, 'losses': 0 });
  }

  useEffect(() => {
    getRGB();
    pickAnswer();
    setScore({ 'wins': 0, 'losses': 0 });
  }, [])
  
  console.log(rgb);
  console.log(answer);



  return (
    <div className="App">
      <h1>Guess the Color</h1>
      <p>Pick which color you think corresponds with the following RGB code:</p>

      {/* RGB code displayed here */}
      <p> {rgb[answer]} </p>

      {/* 4 color choices displayed in a 2x2 grid */}
      <div className='container'>
        <div className='box' style={{backgroundColor: `${rgb[0]}`}}>Box 1</div>
        <div className='box' style={{backgroundColor: `${rgb[1]}`}}>Box 2</div>
      </div>
      <div className='container'>
        <div className='box' style={{backgroundColor: `${rgb[2]}`}}>Box 3</div>
        <div className='box' style={{backgroundColor: `${rgb[3]}`}}>Box 4</div>
      </div>
      {/* after selecting the answer the right one will stay but the other will become translucent */}

      {/* win/loss counter (not visible) */}
      {/* shows the score after 10 turns and shows a play "again button" */}
      

      {/* link to github */}
      <p className='githubLink'>See this project on&nbsp;<a href='https://github.com/kawaiimusician/color-guessing-game' target='_blank'>Github</a>!</p>

    </div>
  );
}

export default App;


// app flow:
// picks 4 colors
// out of 4 colors, picks 1 to be the answer
// display colors onto the screen and allow user to click the color they think is right
// after selecting an answer the right one will stay opaque while the other 3 become translucent
// in the background, win/loss recorded to state
// update counter
// after guessing 10 times, below the colors will display the score and a "play again?" button
