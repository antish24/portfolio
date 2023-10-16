'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = ({textData1,textData2}) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        `${textData1}`,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        `${textData2}`,
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize:'inherit', display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default TypingAnimation