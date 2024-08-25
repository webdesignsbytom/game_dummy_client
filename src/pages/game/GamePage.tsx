import React, { useState } from 'react';
import GameCanvas from '../../components/game/GameCanvas';

const GamePage: React.FC = () => {
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [justStarted, setJustStarted] = useState(true);
  
  return (
    <div className='grid grid-rows-reg'>
      <div>Game</div>
      <div>
        <GameCanvas
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          externalScore={score}
          setScore={setScore}
          setIsGameOver={setIsGameOver}
        />
      </div>
    </div>
  );
};

export default GamePage;
