import { useState } from 'react';
import UseNaruto from './assets/components/useNaruto';


function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const [showCards, setShowCards] = useState('')
  const [isLoading, setIsLoading] = useState(false)



  return (
    <>
      <header>
        <h1>Naruto Memory Card Game</h1>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </header>
      <main>
        <UseNaruto
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore} />
      </main>
      <footer>some footers, name, api</footer>
    </>

  )
}

export default App
