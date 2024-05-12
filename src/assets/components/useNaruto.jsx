import { useState, useEffect } from "react"
import CardGrid from "./cardGrid"

export default function UseNaruto({ score, setScore, kek }) {
    const [chars, setChars] = useState([])

    useEffect(() => {
        initializeChars()
    }, [score])

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
        console.log(await someChars);
        setChars(await someChars)
    }

    function handleScore() {
        setScore(score + 1)
    }

    return (
        <>
            <button onClick={handleScore}>add score</button>
            <div>
                <CardGrid chars={chars} />
            </div>


        </>
    )

}