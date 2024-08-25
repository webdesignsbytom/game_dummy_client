import React, { useEffect, useState } from 'react';
import Navbar from '../../components/nav/Navbar';

const AboutPage: React.FC = () => {
    const [number, setNumber] = useState(1); // im imported up top

  useEffect(() => {
    console.log('ON LOAD OR CHANGE I RUN');
  }, [number]); // If a state is in the [] then if the state changes useEffect runs
  // Uses if you want to use an api or function everytime the user enters info into an input

  const increment = () => setNumber((prevNumber) => prevNumber + 1);
  const decrement = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div className=''>
      <Navbar />
      <h1>Welcome to My ABOUT PAGE</h1>
      <p>This is a simple aboutPage page built with React and TypeScript.</p>

      <div className='counter'>
          <h2>Counter: {number}</h2>
          <button onClick={increment}>Up</button>
          <button onClick={decrement}>Down</button>
        </div>
    </div>
  );
};

export default AboutPage;
