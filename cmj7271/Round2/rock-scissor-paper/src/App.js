import { useState } from 'react';
import HandButton from './button/HandButton';
import HandIcon from './button/HandIcon';
import { compareHand, generateRandomHand } from './utils';
import ResetButton from './button/ResetButton';
import Score from './score/Score';

import "./style.css"

const INITIAL_VALUE = 'rock';

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %= 10;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  return (
      <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <ResetButton className="App-reset" onClick={handleClearClick}></ResetButton>
      <div className="App-scores">
        <Score className="Score" name="나" num={score}></Score>
        <div className="App-versus">:</div>
        <Score className="Score" name="상대" num={otherScore}></Score>
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          <div className="App-hands">
            <div className="Hand">
              <HandIcon value={hand} className="Hand-icon"></HandIcon>
            </div>
            <div className="App-versus">VS</div>
            <div className="Hand">
              <HandIcon value={otherHand} className="Hand-icon"></HandIcon>
            </div>
          </div>

          <div className='App-bet'>
            <span>배점</span>
            <input type='number' min={1} max={9} step={1} value={bet} onChange={handleBetChange}></input>
            <span>배</span>
          </div>
          <div className='App-history'>
            <h2>승부기록</h2>
            <p>{gameHistory.join(", ")}</p>
          </div>
        </div>
      </div>
      <HandButton value={"rock"} onClick={handleButtonClick}></HandButton>
      <HandButton value={"scissor"} onClick={handleButtonClick}></HandButton>
      <HandButton value={"paper"} onClick={handleButtonClick}></HandButton>
    </div>
  );
}

export default App;
