import './css/main.css'
import React, {useState} from 'react'

function App() {

  const [count, setCount] = useState(0)

  const handleClick = ()=> {
    setCount(prev => prev + 1)
  }

  return (
    <main>
      <h1>You can press the button</h1>
      <button className='button' onClick={handleClick}>Press the Button</button>
      <p>You have pressed the button <span>{count}</span> times!</p>
    </main>
  );
}

export default App;
