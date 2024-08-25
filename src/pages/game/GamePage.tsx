import React, { useState } from 'react';
// Components
import GameCanvas from '../../components/game/GameCanvas';
import Navbar from '../../components/nav/Navbar';

const GamePage: React.FC = () => {
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [justStarted, setJustStarted] = useState(true);

  return (
    <div className='grid h-screen min-h-screen w-full overflow-hidden'>
      <div className='grid grid-rows-reg h-full w-full'>
        <Navbar />
        <main className='grid w-full h-full bg-orange-200'>
          <GameCanvas
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            externalScore={score}
            setScore={setScore}
            setIsGameOver={setIsGameOver}
          />
        </main>
      </div>
    </div>
  );
};

export default GamePage;
