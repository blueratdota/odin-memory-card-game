import { useState, useEffect, useRef } from "react"
import CardGrid from "./cardGrid"

export default function UseNaruto({ score, setScore, bestScore, setBestScore }) {
    const [chars, setChars] = useState([])
    const [clickedChars, setClickedChars] = useState([])
    const [gameStatus, setGameStatus] = useState('')
    // const clickedChars = useRef(null)

    useEffect(() => {
        setGameStatus('play')
        initializeChars()
        if (gameStatus == 'new') {
            setClickedChars([])
        }
    }, [score, bestScore])

    const narutoNamescut = ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Obito Uchiha', 'Itachi Uchiha', 'Madara Uchiha', 'Hashirama Senju', 'Orochimaru', 'Minato Namikaze', 'Tsunade', 'Nagato', 'Might Guy', 'Gaara', 'Kabuto Yakushi', 'Kisame Hoshigaki']
    const narutoNames = ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Obito Uchiha', 'Itachi Uchiha', 'Madara Uchiha', 'Hashirama Senju', 'Orochimaru', 'Minato Namikaze', 'Tsunade', 'Nagato', 'Might Guy', 'Gaara', 'Kabuto Yakushi', 'Kisame Hoshigaki', 'Deidara', 'Hidan', 'Sasori', 'Tobirama Senju', 'Hiruzen Sarutobi', 'Sai', 'Yamato', 'Darui', 'Boruto Uzumaki', 'Sarada Uchiha', 'Mitsuki', 'Konohamaru Sarutobi', 'Kawaki', 'Shikamaru Nara']


    const getChars = async function (name) {
        const response = await fetch(`https://narutodb.xyz/api/character/search?name=${name}`, { mode: 'cors' })
        const charData = await response.json()
        return charData
    }

    const getRandomChars = async function () {
        const charPool = []
        while (charPool.length < 16) {
            const randChar = narutoNames[Math.floor(Math.random() * 30)]
            if (!charPool.includes(randChar)) {
                charPool.push(randChar)
            }
        }
        return await Promise.all(charPool.map(getChars))
    }

    const initializeChars = async () => {
        const someChars = getRandomChars()
        // console.log(await someChars);
        setChars(await someChars)
    }

    function handleScore() {
        setScore(score + 1)
    }

    function handleCardClick(char) {
        console.log(char.name);

        if (clickedChars.includes(char.name)) {
            gameOver()
            //code for bring up modal
            //modal shows score, best score, option to play again, quit--and show menu
        }
        else {
            setClickedChars([...clickedChars, char.name])
            handleScore()
        }

        setClickedChars([...clickedChars, char.name])
        console.log(clickedChars);

    }

    async function gameOver() {
        console.log('GAME OVER', score);
        if (bestScore < score) {
            await setBestScore(score)
        }
        setGameStatus('new')
        await setScore(0)
    }


    return (
        <>
            <div className="grid grid-cols-8 gap-4 p-20 ">
                <CardGrid
                    chars={chars}
                    cardClick={handleCardClick} />
            </div>

        </>
    )

}