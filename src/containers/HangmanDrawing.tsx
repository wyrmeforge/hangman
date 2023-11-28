import React from "react";

const Head = (
    <div className='w-[50px] h-[50px] rounded-full border-[10px] border-black absolute top-[70px] right-[-20px]'></div>
)

const Body = (
    <div className='w-[10px] h-[100px] bg-black absolute top-[120px] right-0'/>
)

const RightArm = (
    <div
        className='w-[100px] h-[10px] bg-black absolute top-[150px] right-[-100px] rotate-[-30deg] origin-bottom-left'/>
)

const LeftArm = (
    <div className='w-[100px] h-[10px] bg-black absolute top-[150px] right-[10px] rotate-[30deg] origin-bottom-right'/>
)

const RightLeg = (
    <div className='w-[100px] h-[10px] bg-black absolute top-[210px] right-[-90px] rotate-[60deg] origin-bottom-left'/>
)

const LeftLeg = (
    <div className='w-[100px] h-[10px] bg-black absolute top-[210px] right-0 rotate-[-60deg] origin-bottom-right'/>
)

const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];


type HangmanDrawingProps = {
    numberOfGuesses: number
}

const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
    return (
        <div className='relative'>
            {bodyParts.slice(0, numberOfGuesses).map((part, index) => (
                <React.Fragment key={index}>{part}</React.Fragment>
            ))}
            <div className='h-[70px] w-[10px] bg-black absolute top-0 right-0'/>
            <div className='h-[10px] w-[200px] bg-black ml-[120px]'/>
            <div className='h-[400px] w-[10px] bg-black ml-[120px]'/>
            <div className='h-[10px] w-[250px] bg-black'/>
        </div>
    );
};

export default HangmanDrawing;