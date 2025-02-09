"use client";
// components/GiocoDellOca.tsx
import { useState } from 'react';

type Player = {
  id: number;
  position: number;
  skills: {
    skipTurn: number;
    skipTwoTurns: number;
  };
};

type SpecialCell = {
  type: 'skipTurn' | 'skipTwoTurns';
  threshold: number;
};

const GiocoDellOca: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, position: 0, skills: { skipTurn: 1, skipTwoTurns: 1 } },
    { id: 2, position: 0, skills: { skipTurn: 1, skipTwoTurns: 1 } },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [diceResult, setDiceResult] = useState<number | null>(null);

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
    player.position += steps;

    // Controlla se il giocatore ha superato la fine del percorso
    if (player.position >= 63) {
      player.position = 63;
      alert(`Giocatore ${player.id} ha vinto!`);
    }

    setPlayers(updatedPlayers);
    checkSpecialCell(player);
    setCurrentPlayer((currentPlayer + 1) % players.length);
  };

  const checkSpecialCell = (player: Player): void => {
    const specialCells: Record<number, SpecialCell> = {
      5: { type: 'skipTurn', threshold: 5 },
      9: { type: 'skipTwoTurns', threshold: 7 },
      // Aggiungi altre celle speciali qui
    };

    const cell = specialCells[player.position];
    if (cell) {
      const diceRoll = rollDice();
      const total = diceRoll + player.skills[cell.type];
      if (total < cell.threshold) {
        alert(`Giocatore ${player.id} salta il turno!`);
        setCurrentPlayer((currentPlayer + 1) % players.length);
      } else {
        alert(`Giocatore ${player.id} supera la prova e non salta il turno!`);
      }
    }
  };

  const renderBoard = (): JSX.Element[] => {
    const boardCells: JSX.Element[] = [];
    for (let i = 0; i < 64; i++) {
      const playersInCell = players.filter((player) => player.position === i);
      boardCells.push(
        <div key={i} className="bg-gray-200 w-12 h-12 border flex items-center justify-center">
          {playersInCell.map((player) => (
            <span key={player.id} className={`text-sm text-white bg-blue-500 rounded-full px-2 py-1`}>
              {player.id}
            </span>
          ))}
        </div>
      );
    }
    return boardCells;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Gioco dell'Oca</h1>
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
      {diceResult && <p className="mt-4">Risultato del dado: {diceResult}</p>}
    </div>
  );
};

export default GiocoDellOca;