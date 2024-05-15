import { useState } from 'react';
import UseNaruto from './assets/components/useNaruto';
import logo from './assets/images/Naruto_logo.svg'
import headerText from './assets/images/header-text.png'


function App() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const [showCards, setShowCards] = useState('')
  const [isLoading, setIsLoading] = useState(false)



  return (
    <div className='bg-gradient-to-t from-orange-300 h-screen'>
      <header className='flex justify-between px-20 pt-4' >
        <div className='flex items-center gap-6'>
          <img src={logo} alt="" className='max-h-24' />
          <img src={headerText} alt="" className='max-h-16' />
        </div>
        <div className=' flex flex-col justify-center  text-lg'>
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
