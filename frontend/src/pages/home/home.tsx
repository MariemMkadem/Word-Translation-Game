import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Welcome to the Word Translation Game</h1>
      <Link to="/game">Start Game</Link>
    </div>
  );
};

