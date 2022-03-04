import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Shape from './Shape';

function App() {
  const [count, setCount] = useState(0)

  let inc = ()=>{
    setCount(count + 1)
  }

   let dec = () => {
     setCount(count - 1)
   }

    let res = () => {
      setCount(0)
    }

  
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={dec} className='btn'>Decrease</button>
      <button onClick={res} className='btn'>Reset</button>
      <button onClick={inc} className='btn'>Increase</button>
      <Shape/>
    </div>
  );
}

export default App;
