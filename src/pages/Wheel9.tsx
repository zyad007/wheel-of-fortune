import React, { useEffect, useState } from 'react'
import WheelComponent from '../components/WheelComponent';
import Test from '../components/Test';

export default function Wheel9() {
    const [winner, setWinner] = useState("Spin")
    const primaryColor = "black"
    const contrastColor = "white"
    const upDuration = 3000
    const downDuration = 3000
    const segments: [string, string, string, string, string, string, string, string, string] = [
        "red",
        "light yellow",
        "purple",
        "sky blue",
        "light green",
        "dark yellow",
        "orange",
        "dark blue",
        "brown"
    ];
    const segColors: [string, string, string, string, string, string, string, string, string] = [
        "#EE4040",
        "#F0CF50",
        "#815CD1",
        "#3DA5E0",
        "#34A24F",
        "#949106",
        "#FF9000",
        "#001CAD",
        "#6F2200"
    ];
    const onFinished = (winner: string) => {
        console.log(new Date())
        setWinner(winner)
    };
    useEffect(() => {
        document.getElementById('label')!.style.backgroundColor = primaryColor;
        document.getElementById('label')!.style.color = contrastColor
    }, [])
    return (
        <div className='relative' onClick={() => { console.log(new Date()) }}>
            <div id='label' className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black text-white flex justify-center text-center items-center font-bold'>
                {winner}
            </div>
            <WheelComponent
                setWinner={setWinner}
                winningSegment=''
                segments={segments}
                segColors={segColors}
                // winningSegment='won 10'
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
