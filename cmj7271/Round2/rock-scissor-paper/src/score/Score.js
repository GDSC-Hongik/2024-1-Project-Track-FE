function Score({ className, name, num }) {
    return (
    <div className={className}>
        <div className="Score-num">{num}</div>
        <div className="Score-name">{name}</div>
    </div>
    )
}

export default Score