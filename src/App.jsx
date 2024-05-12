import { useState } from 'react';
import UseNaruto from './assets/components/useNaruto';


function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [gameStatus, setGameStatus] = useState('')
  const [showCards, setShowCards] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <header>
        <h1>Naruto Memory Card Game</h1>
        <p>{score}</p>
      </header>
      <main>
        <UseNaruto score={score} setScore={setScore} />
      </main>
      <footer>some footers, name, api</footer>
    </>

  )
}

export default App
