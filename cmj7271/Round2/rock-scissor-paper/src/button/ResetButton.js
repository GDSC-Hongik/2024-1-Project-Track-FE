import reset from "../assets/ic-reset.svg"
import "./css/resetButton.css"

function ResetButton({ className, onClick }) {
    return <img className={className} src={reset} onClick={onClick} alt="초기화"></img>
}

export default ResetButton