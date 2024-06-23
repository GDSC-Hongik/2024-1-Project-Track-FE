import HandIcon from './HandIcon';
import './HandButton.css';

// CSS 파일로 스타일을 적용해 주세요
function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button className="HandButton" onClick={onClick}>
      <HandIcon className="HandButton-icon" value={value} />
    </button>
  );
}

export default HandButton;
