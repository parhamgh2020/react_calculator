import "./Button.css"


const Button = ({ symbol, color, handleOnClick }) => {
    console.log(symbol)
    return (
        <div className="button-wrapper"
            style={{ backgroundColor: color }}
            onClick={() => handleOnClick(symbol)}
        >
            {symbol}
        </div>
    );
}

export default Button;