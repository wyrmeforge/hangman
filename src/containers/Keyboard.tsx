import {Keys} from "../enums/keys.ts";

type KeyboardProps = {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter, disabled = false,}: KeyboardProps) => {
    const keysArray = Object.values(Keys);

    return (
        <div
            className='grid grid-cols-keyboard gap-[.5rem]'
        >
            {keysArray.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)

                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={`${isActive ? 'bg-[#00ff80] text-white' : ""} ${
                            isInactive ? 'bg-red-800 opacity-[.3]' : ""
                        }`}
                        disabled={isInactive || isActive || disabled}
                        key={key}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    )
}

export default Keyboard