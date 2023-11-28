import HangmanDrawing from './containers/HangmanDrawing'
import HangmanWord from "./containers/HangmanWord.tsx";
import Keyboard from "./containers/Keyboard.tsx";
import words from './wordList.json';
import {useCallback, useState} from "react";
import {useHandleKeyPress} from "./hooks.ts";

const getWord = () => {
    return words[Math.floor(Math.random() * words.length)]
}

function App() {
    const [wordToGuess, setWordToGuess] = useState(getWord)
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter)
    )

    const isLoser = incorrectLetters.length >= 6
    const isWinner = wordToGuess
        .split("")
        .every(letter => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter) || isLoser || isWinner) return

            setGuessedLetters(currentLetters => [...currentLetters, letter])
        },
        [guessedLetters, isWinner, isLoser]
    )

    const onReplayClick = () => {
        setWordToGuess(getWord)
        setGuessedLetters([])
    }

    useHandleKeyPress((e: KeyboardEvent) => {
        const key = e.key
        if (!key.match(/^[А-ЯҐґЄєІіЇїЙйХхЦцЧчШшЬьЮюЯя]$/i)) return;

        e.preventDefault()
        addGuessedLetter(key)
    }, [guessedLetters])

    useHandleKeyPress((e: KeyboardEvent) => {
        const key = e.key
        if (key !== "Enter") return

        e.preventDefault()
        setGuessedLetters([])
        setWordToGuess(getWord())
    })


    return (
        <div className='max-w-[900px] flex flex-col items-center gap-[2rem] my-0 mx-auto'>
            <div className='text-[30px] pt-10 flex items-center text-center mb-4'>
                {isWinner && "Перемога!"}
                {isLoser && "Гарна спроба"}
                {(isLoser || isWinner) &&
                    (
                        <button onClick={onReplayClick} className='ml-3 h-10 bg-white w-40 text-[1rem] !p-0 m-0'>
                            Ще раз!
                        </button>
                    )
                }
            </div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
            <HangmanWord
                reveal={isLoser}
                guessedLetters={guessedLetters}
                wordToGuess={wordToGuess}
            />
            <div className='self-stretch'>
                <Keyboard
                    disabled={isWinner || isLoser}
                    activeLetters={guessedLetters.filter(letter =>
                        wordToGuess.includes(letter)
                    )}
                    inactiveLetters={incorrectLetters}
                    addGuessedLetter={addGuessedLetter}
                />

            </div>
        </div>
    )
}

export default App
