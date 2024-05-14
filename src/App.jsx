import { useState } from 'react';
import UseNaruto from './assets/components/useNaruto';


function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const [showCards, setShowCards] = useState('')
  const [isLoading, setIsLoading] = useState(false)



  return (
    <div className='bg-gradient-to-br from-red-300 h-screen'>
      <header className='flex justify-between px-20 pt-4' >
        <h1 className=" font-extrabold text-4xl">Naruto Memory Card Game</h1>
        <div className='text-lg'>
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>

      </header>
      <main>
        <UseNaruto
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore} />
      </main>
      <footer>some footers, name, api</footer>
    </div>

  )
}

export default App
