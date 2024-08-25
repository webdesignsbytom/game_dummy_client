import React, { useState } from 'react';
// Component
import Navbar from '../../components/nav/Navbar';
// Context
import { useUser } from '../../context/UserContext';

const HomePage: React.FC = () => {
  const { user, setUser } = useUser();

  const [number, setNumber] = useState(1);

  const increment = () => setNumber((prevNumber) => prevNumber + 1);
  const decrement = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div className='home'>
      <Navbar />

      <main>
        <h1>Welcome to My React App {user?.name}</h1>
        <p>This is a simple home page built with React and TypeScript.</p>

        <div className='counter'>
          <h2>Counter: {number}</h2>
          <button onClick={increment}>Up</button>
          <button onClick={decrement}>Down</button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
