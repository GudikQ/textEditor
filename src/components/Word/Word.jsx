import React from 'react';

import './Word.css';

const Word = ({
  setActiveWord,
  bold,
  underlined,
  itallic,
  active,
  word,
  index,

}) => {
  const boldC = bold ? 'bold' : ''
  const underC = underlined ? 'underlined' : ''
  const itallC = itallic ? 'itallic' : ''
  const activeC = active ? 'active' : ''
  return (
    <span
      id={index}
      onClick={() => setActiveWord()}
      className={`word ${boldC} ${underC} ${itallC} ${activeC}`}>
        {word}
      </span>
  )
};

export default Word;
