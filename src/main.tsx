import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import WheelComponent from './components/App.tsx'
const segments = [
  "red",
  "light yellow",
  "purple",
  "sky blue",
  "light green",
  "dark yellow",
  "orange"
];
const segColors = [
  "#EE4040",
  "#F0CF50",
  "#815CD1",
  "#3DA5E0",
  "#34A24F",
  "#EC3F3F",
  "#FF9000"
];
const onFinished = (winner: string) => {
  console.log(winner);
};
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WheelComponent
      winningSegment='red'
      segments={segments}
      segColors={segColors}
      // winningSegment='won 10'
      onFinished={(winner) => onFinished(winner)}
      primaryColor="black"
      contrastColor="white"
      buttonText="Spin"
      isOnlyOnce={false}
      size={290}
      upDuration={1000}
      downDuration={2000}
      fontFamily="Arial" />
  </React.StrictMode>,
)
