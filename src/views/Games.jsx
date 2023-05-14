import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Square from "../components/Square";
import "./Games.css";
import Navbar from '../components/Navbar/Navbar';
import logo from './Enterflightment.png';
//import SockJS from "sockjs-client/dist/sockjs.min.js"
import { useLocation, useNavigate } from 'react-router-dom'
//import e from "cors";
//import {Server as SocketServer} from "socket.io";


function Games() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [torn, setTorn] = useState('');
  const [turn, setTurn] = useState("");
  const [usuari2, setUsuari2] = useState("");
  const [winner, setWinner] = useState(null);
  const location = useLocation()
  var { game } = location.state
  const [value, setValue] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
      const storedValue = localStorage.getItem('myVariable');
      if (storedValue) {
        setValue(storedValue);
      }
      console.log('http://10.5.237.7:8080/games/'+game.id+'?username='+storedValue);
      const modifiedArray = Array.from(game.board).map(item => item === '-' ? '' : item);
      console.log(modifiedArray);
      setSquares(modifiedArray)
      setUsuari2(game.user2)
      setTurn(value === usuari2 ? "o" : "x");
      setTorn(game.turn)
   
      
    }, []);

   // const io = new SocketServer
    
    var sock = new WebSocket( 'ws://10.5.237.7:8080/games/'+game.id+'?username='+value);
    sock.onopen = function() {
        console.log('open');
        //sock.send('test');
    };
    sock.addEventListener('open', () => {
        console.log('open');
    });
   
    sock.onmessage = function(e) {
       
        var dat = JSON.parse(e.data);
        //game=dat;
        const modifiedArray = Array.from(dat.board).map(item => item === '-' ? '' : item);
        game.board=modifiedArray;
        setSquares(modifiedArray)
        setUsuari2(dat.user2)
        console.log(dat.user2)
        console.log(value)
        console.log(value === dat.user2)
        setTurn(value === dat.user2 ? "o" : "x");
        setTorn(dat.turn)
        
       
    };
   
    sock.onclose = function() {
        console.log('close');
    };


  const checkEndTheGame = () => {
      for (let square of squares) {
          if (!square) return false;
      }
      return true;
  };

  const checkWinner = () => {
      const combos = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
      ];

      for (let combo of combos) {
          const [a, b, c] = combo;
          if (
              squares[a] &&
              squares[a] === squares[b] &&
              squares[a] === squares[c]
          ) {
              return squares[a];
          }
      }
      return null;
  };

  const updateSquares = (ind) => {
      if (squares[ind] || winner) {
          return;
      }
      if (torn !== value) {
          return;
      }
      const s = squares;
      s[ind] = turn;
      setSquares(s);
      setTurn(value === usuari2 ? "o" : "x");
      const W = checkWinner();
      if (W) {
          setWinner(W);
      } else if (checkEndTheGame()) {
          setWinner("x | o");
      }
      var auxarray = squares.map(item => item === '' ? '-' : item);
      var saux = auxarray.join('');
      var tosend = JSON.stringify({id: game.id, board: saux, turn: turn});
      sock.send(tosend);
  };

  const resetGame = () => {
      setSquares(Array(9).fill(""));
      setTurn("x");
      setWinner(null);
      navigate("/rooms", { replace: true});
  };

  return (
    <>
     <div>
        <img className="logo" src={logo} />
      </div>
    <Navbar/>
    <div className="tic-body">
        <div className="tic-tac-toe">
            <h1> TIC-TAC-TOE </h1>
            <Button resetGame={resetGame} />
            <div className="game">
                {Array.from("012345678").map((ind) => (
                    <Square
                        key={ind}
                        ind={ind}
                        updateSquares={updateSquares}
                        clsName={squares[ind]}
                    />
                ))}
            </div>
            <div className={`turn ${turn === "x" ? "left" : "right"}`}>
                <Square clsName="x" />
                <Square clsName="o" />
            </div>
            <AnimatePresence>
                {winner && (
                    <motion.div
                        key={"parent-box"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="winner"
                    >
                        <motion.div
                            key={"child-box"}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="text"
                        >
                            <motion.h2
                                initial={{ scale: 0, y: 100 }}
                                animate={{
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        y: { delay: 0.7 },
                                        duration: 0.7,
                                    },
                                }}
                            >
                                {winner === "x | o"
                                    ? "No Winner :/"
                                    : "Win !! :)"}
                            </motion.h2>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{
                                    scale: 1,
                                    transition: {
                                        delay: 1.3,
                                        duration: 0.2,
                                    },
                                }}
                                className="win"
                            >
                                {winner === "x | o" ? (
                                    <>
                                        <Square clsName="x" />
                                        <Square clsName="o" />
                                    </>
                                ) : (
                                    <>
                                        <Square clsName={winner} />
                                    </>
                                )}
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{
                                    scale: 1,
                                    transition: { delay: 1.5, duration: 0.3 },
                                }}
                            >
                                <Button resetGame={resetGame} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </div>
    </>
  );
}

export default Games;