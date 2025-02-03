"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Player = {
  id: number;
  position: number;
  skills: {
    skipTurn: number;
    skipTwoTurns: number;
    exactFinish: number;
  };
};

type SpecialCell = {
  type: 'skipTurn' | 'skipTwoTurns';
  threshold: number;
  color: 'yellow' | 'red';
};

const GiocoDellOca: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [diceResult, setDiceResult] = useState<number | null>(null);
  const [specialCells, setSpecialCells] = useState<Record<number, SpecialCell>>({});
  const [numPlayers, setNumPlayers] = useState<number>(2);

  // Inizializza le caselle speciali in modo casuale
  useEffect(() => {
    const cells: Record<number, SpecialCell> = {};
    for (let i = 0; i < 10; i++) {
      const randomCell = Math.floor(Math.random() * 63) + 1;
      cells[randomCell] = {
        type: Math.random() > 0.5 ? 'skipTurn' : 'skipTwoTurns',
        threshold: Math.random() > 0.5 ? 5 : 7,
        color: Math.random() > 0.5 ? 'yellow' : 'red',
      };
    }
    setSpecialCells(cells);
  }, []);

  // Inizializza i giocatori
  useEffect(() => {
    restartGame();
  }, [numPlayers]);

  const restartGame = (): void => {
    const newPlayers: Player[] = [];
    for (let i = 1; i <= numPlayers; i++) {
      newPlayers.push({
        id: i,
        position: 0,
        skills: { skipTurn: 1, skipTwoTurns: 1, exactFinish: 1 },
      });
    }
    setPlayers(newPlayers);
    setCurrentPlayer(0);
    setDiceResult(null);
  };

  const rollDice = (): number => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const handleRoll = (): void => {
    const result = rollDice();
    setDiceResult(result);
    movePlayer(result);
  };

  const movePlayer = (steps: number): void => {
    const updatedPlayers = [...players];
    const player = updatedPlayers[currentPlayer];
    const newPosition = player.position + steps;

    if (newPosition > 63) {
      const diceRoll = rollDice();
      const total = diceRoll + player.skills.exactFinish;
      if (total >= 5) {
        player.position = 63;
        alert(`Giocatore ${player.id} ha vinto!`);
      } else {
        player.position = 63 - (newPosition - 63);
        alert(`Giocatore ${player.id} deve finire esattamente sulla casella 63!`);
      }
    } else {
      player.position = newPosition;
    }

    if (player.position === 63) {
      alert(`Giocatore ${player.id} ha vinto!`);
    }

    setPlayers(updatedPlayers);
    checkSpecialCell(player);
    setCurrentPlayer((currentPlayer + 1) % players.length);
  };

  const checkSpecialCell = (player: Player): void => {
    const cell = specialCells[player.position];
    if (cell) {
      const diceRoll = rollDice();
      const total = diceRoll + player.skills[cell.type];
      if (total < cell.threshold) {
        alert(`Giocatore ${player.id} salta ${cell.type === 'skipTurn' ? '1 turno' : '2 turni'}!`);
        setCurrentPlayer((currentPlayer + (cell.type === 'skipTurn' ? 1 : 2)) % players.length);
      } else {
        alert(`Giocatore ${player.id} supera la prova e non salta il turno!`);
      }
    }
  };

  const renderBoard = (): JSX.Element[] => {
    const boardCells: JSX.Element[] = [];
    for (let i = 0; i < 64; i++) {
      const playersInCell = players.filter((player) => player.position === i);
      const cellColor = specialCells[i]?.color || 'white';
      boardCells.push(
        <motion.div
          key={i}
          className={`w-12 h-12 border flex items-center justify-center ${
            cellColor === 'yellow' ? 'bg-yellow-200' : cellColor === 'red' ? 'bg-red-200' : 'bg-white'
          }`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {playersInCell.map((player) => (
            <motion.div
              key={player.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image src="avatar.svg" alt={`Player ${player.id}`} width={24} height={24} />
            </motion.div>
          ))}
        </motion.div>
      );
    }
    return boardCells;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Gioco dell'Oca</h1>
      <div className="mb-4">
        <label>
          Numero di giocatori (2-6):
          <input
            type="number"
            min="2"
            max="6"
            value={numPlayers}
            onChange={(e) => setNumPlayers(Number(e.target.value))}
            className="ml-2 p-1 border rounded"
          />
        </label>
      </div>
      <div className="mb-8">
        {players.map((player) => (
          <div key={player.id} className="mb-2">
            <p>Giocatore {player.id}: Posizione {player.position}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-8 gap-1 mb-8">
        {renderBoard()}
      </div>
      <button
        onClick={handleRoll}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Lancia il dado
      </button>
      <button
        onClick={restartGame}
        className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 mt-4"
      >
        Restart
      </button>
      {diceResult && <p className="mt-4">Risultato del dado: {diceResult}</p>}
    </div>
  );
};

export default GiocoDellOca;