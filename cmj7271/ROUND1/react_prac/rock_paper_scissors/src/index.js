import ReactDOM from 'react-dom';
import HandIcon from './HandIcon';

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

function getResult(left, right) {
  if (WINS[left] === right) return '승리';
  else if (left === WINS[right]) return '패배';
  return '무승부';
}

function handleClick() {
  console.log('가위바위보!');
}

const me = 'rock';
const other = 'scissor';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <HandIcon/>
  </div>
);
