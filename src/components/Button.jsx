// eslint-disable-next-line react/prop-types
const Button = ({ resetGame }) => {
    return <button onClick={() => resetGame()}>New Game</button>;
};

export default Button;