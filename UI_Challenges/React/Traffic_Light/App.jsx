import { useState, useEffect } from 'react';
import './styles.css';

function Light({ isActive, color, duration, updateIndex }) {
  if (isActive) {
    setTimeout(() => {
      updateIndex(prevIndex => (prevIndex + 1) % 3);
    }, duration);
  }

  return (
    <div
      className="light"
      style={{
        width: `3rem`,
        height: `3rem`,
        borderRadius: `50%`,
        border: `1px solid black`,
        marginBottom: `1rem`,
        backgroundColor: isActive ? `${color}` : 'white',
      }}
    />
  );
}

export default function TrafficLight() {
  const [curIndex, setCurIndex] = useState(0);
  const info = [
    { color: 'red', duration: 4000 },
    { color: 'yellow', duration: 500 },
    { color: 'green', duration: 3000 },
  ];

  return (
    <div className="light-container">
      <div>
        {Array(3)
          .fill(null)
          .map((_, index) => {
            return (
              <Light
                key={index}
                isActive={index === curIndex}
                color={info[index].color}
                duration={info[index].duration}
                updateIndex={setCurIndex}
              />
            );
          })}
      </div>
    </div>
  );
}
