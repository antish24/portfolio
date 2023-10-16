'use client'
import React, { useEffect, useState } from 'react';

const TypingAnimation = ({textData}) => {
  const [text, setText] = useState('');
  const sentence = textData

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < sentence.length - 1) {
        setText((prv)=>prv + sentence[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the typing speed by changing the interval duration
    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return <span>{text}</span>;
};

export default TypingAnimation;