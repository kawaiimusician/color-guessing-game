import './App.css';

function App() {

  // const [rgb, setRgb] = useState({})
  // const [answer, setAnswer] = useState([])
  // const [counter, setCounter] = useState(0)
  // const [score, setScore] = useState({[wins: 0], [losses: 0]})

  // rgb picker function - picks 3 random numbers between 0 and 255. stores in state. (does it 4 times.)
  // random pick between 0 and 3 to determine the RGB code that will be the answer, store in answer state


  return (
    <div className="App">
      <h1>Guess the Color</h1>
      <p>Pick which color you think corresponds with the following RGB code:</p>

      {/* RGB code displayed here */}
      {/* 4 color choices displayed in a 2x2 grid */}
      {/* after selecting the answer the right one will stay but the other will become translucent */}

      {/* win/loss counter (not visible) */}
      {/* shows the score after 10 turns and shows a play "again button" */}

      {/* link to github */}

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
