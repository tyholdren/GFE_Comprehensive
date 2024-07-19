import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [images, setImages] = useState([]);
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    const getImages = async () => {
      try {
        const res = await fetch('https://www.reddit.com/r/aww/top/.json?t=all');
        const imageRes = await res.json();
        setImages(imageRes.data.children);
      } catch (error) {
        console.error({ error });
      }
    };
    getImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const intervalId = setInterval(() => {
        setCurIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [images]);

  const handleClick = string => {
    const moveRight = string === '+';
    if (moveRight) {
      if (curIndex < images.length) {
        setCurIndex(curIndex + 1);
      }
    } else {
      if (curIndex > 0) {
        setCurIndex(curIndex - 1);
      }
    }
  };

  return (
    <div>
      <div className="carousel-container">
        <button onClick={() => handleClick('-')}>{'<'}</button>
        {images.length > 0 ? (
          <img
            src={images[curIndex].data.thumbnail}
            width={images[curIndex].data.thumbnail_width}
            height={images[curIndex].data.thumbnail_width}
            alt="carousel-image"
          />
        ) : (
          <p>Loading images...</p>
        )}
        <button onClick={() => handleClick('+')}>{'>'}</button>
      </div>
    </div>
  );
}
