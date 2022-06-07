import { useState } from 'react';
import './Styles/App.scss';
import patternDesktop from './pattern-divider-desktop.svg'
import patterMobile from './pattern-divider-mobile.svg'
import iconDice from './icon-dice.svg'
import useScreenSize from'./Hooks/useScreenSize'

function App() {
  const [advice, setAdvice] = useState({id: 117, advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action."})
  let width = useScreenSize()

  let newAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    setAdvice({id: data.slip.id, advice: data.slip.advice})

  }
  
  
  return (
      <header className="App">
        <div className='container'>
          <h1 className='title'>ADVICE #{advice['id']}</h1>
          <p className='advice'>"{advice['advice']}"</p>
          <img className='pattern-divider' srcSet={width > 1100 ? patternDesktop: patterMobile } alt='Pattern Divider'></img>
        </div>
        <button className='dice' onClick={newAdvice}><img src={iconDice} alt='Dice'/></button>
      </header>
  );
}

export default App;
