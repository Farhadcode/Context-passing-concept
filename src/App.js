import logo from './logo.svg';
import './App.css';
import GrandFather from './Component/GrandFather/GrandFather';
import { createContext } from 'react';
import { useState } from 'react';
export const RingContext = createContext('ring');

function App() {
  const ornaments = "Gold Ring"
  const [house, setHouse] = useState(1);

  return (
    <RingContext.Provider value={[ornaments, house]}>
      <div className="App">
        <button onClick={() => setHouse(house + 1)}> Buy a New House</button>
        <GrandFather></GrandFather>
      </div>
    </RingContext.Provider>
  );
}

export default App;
