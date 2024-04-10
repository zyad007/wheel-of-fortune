import React, { useEffect, useState } from 'react'
import WheelComponent from '../components/WheelComponent';

export default function Wheel7() {
    const [winner, setWinner] = useState("Spin")
    const primaryColor = "black"
    const contrastColor = "white"
    const upDuration = 100
    const downDuration = 1000
    const segments: [string, string, string, string, string, string, string] = [
        "red",
        "light yellow",
        "purple",
        "sky blue",
        "light green",
        "dark yellow",
        "orange"
    ];
    const segColors: [string, string, string, string, string, string, string] = [
        "#EE4040",
        "#F0CF50",
        "#815CD1",
        "#3DA5E0",
        "#34A24F",
        "#949106",
        "#FF9000"
    ];
    const onFinished = (winner: string) => {
        setWinner(winner)
    };
    useEffect(() => {
        document.getElementById('label')!.style.backgroundColor = primaryColor;
        document.getElementById('label')!.style.color = contrastColor
    }, [])
    return (
        <div className='relative'>
            <div id='label' className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black text-white flex justify-center text-center items-center font-bold'>
                {winner}
            </div>
            <WheelComponent
                setWinner={setWinner}
                winningSegment=''
                segments={segments}
                segColors={segColors}
                onFinished={(winner) => onFinished(winner)}
                primaryColor={primaryColor}
                contrastColor={contrastColor}
                buttonText="Spin"
                isOnlyOnce={false}
                size={200}
                upDuration={upDuration}
                downDuration={downDuration}
                fontFamily="Arial" />
        </div>
    )
}
