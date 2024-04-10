import { useEffect, useState } from 'react'
import WheelComponent from '../components/WheelComponent';

export default function Wheel9() {
    const [active, setActive] = useState(true)
    const primaryColor = "black"
    const contrastColor = "white"
    const upDuration = 100
    const downDuration = 500
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
        setActive(true)
        console.log(winner)
    };
    useEffect(() => {
        document.getElementById('label')!.style.backgroundColor = primaryColor;
        document.getElementById('label')!.style.color = contrastColor
    }, [])
    return (
        <div className='relative w-full h-full'>
            <div className='flex items-center top-5'>
                <input className='w-5 h-5 mr-2' type="checkbox" id="demoCheckbox" name="checkbox" checked={active} onChange={(e) => { setActive(e.target.checked) }} />
                <label htmlFor="demoCheckbox">Enable</label>
            </div>

            <div className='relative'>
                {!active && (
                    <div className='absolute w-full h-full'></div>
                )}
                <div onClick={() => setActive(false)}>
                    <WheelComponent
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
            </div>
        </div>
    )
}
