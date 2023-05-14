// eslint-disable-next-line react/prop-types
const Button = ({ resetGame }) => {
    return <button onClick={() => resetGame()}>Go to Rooms</button>;
};

export default Button;