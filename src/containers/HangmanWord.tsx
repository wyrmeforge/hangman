import React from 'react';

type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
    reveal?: boolean;
};

const HangmanWord: React.FC<HangmanWordProps> = ({guessedLetters, wordToGuess, reveal = false}) => {
    return (
        <div className="flex gap-[.25em] text-[6rem] font-bold uppercase">
            {wordToGuess.split("").map((letter, index) => (
                <span className="border-b-[.1em] border-b-black" key={index}>
                    {guessedLetters.includes(letter) || reveal ? (
                        <span className={!guessedLetters.includes(letter) && reveal ? 'text-red' : 'text-black'}>
                            {letter}
                        </span>
                    ) : null}
                </span>
            ))}
        </div>
    );
};

export default HangmanWord;
