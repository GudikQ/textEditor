import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectWords, selectWordsError } from '../../redux/selectors';
import { changeWords, getWords } from '../../redux/actions';
import './Editor.css';
import ControlPanel from '../Control-panel';
import FileZone from '../File-zone';
import Word from '../Word/Word';

const Editor = () => {
  const dispatch = useDispatch()

  const words = useSelector(selectWords)
  const error = useSelector(selectWordsError)

  const [selectedWord, setSelectedWord] = useState('')

  useEffect(() => {
    dispatch(getWords())
  }, [])

  const makeBold = wordId => {
    if (!(wordId > 0)) return false

    const formattedWords = words.map((word, idx) => ({
      ...word,
      bold: idx === wordId ? !word.bold : word.bold,
    }))

    dispatch(changeWords(formattedWords))
  }

  const makeUnderlined = wordId => {
    if (!(wordId > 0)) return false

    const formattedWords = words.map((word, idx) => ({
      ...word,
      underlined: idx === wordId ? !word.underlined : word.underlined,
    }))

    dispatch(changeWords(formattedWords))
  }

  const makeItalic = wordId => {
    if (!(wordId > 0)) return false

    const formattedWords = words.map((word, idx) => ({
      ...word,
      itallic: idx === wordId ? !word.itallic : word.itallic,
    }))

    dispatch(changeWords(formattedWords))
  }

  const addWord = word => {
    const wordList = [
      ...words, { word: word, bold: false, itallic: false, underlined: false }]

    dispatch(changeWords(wordList))
  }

  const replace = (newWord, wordId) => {
    if (newWord && wordId) {
      const wordList = words.map((word, idx) => ({
        ...word,
        word: idx === wordId ? newWord : word.word,
      }))

      dispatch(changeWords(wordList))
    }
  }

  const text = useMemo(() => words.map((word, index) => {
    return (
      <Word key={index}
            active={selectedWord === index}
            index={index}
            {...word}
            setActiveWord={() => setSelectedWord(index)}
      />
    )
  }), [words, selectedWord])

  return (
    <div className="wrapper">
      <header>
        <span>Text Editor</span>
      </header>
      <main>
        <ControlPanel replace={replace}
                      selectedWord={selectedWord}
                      selectedWordText={selectedWord ? words[selectedWord].word : null}
                      makeBold={makeBold}
                      makeItalic={makeItalic}
                      makeUnderlined={makeUnderlined}
                      word={words[selectedWord]}
        />
        <FileZone text={text} addWord={addWord} error={error} />
      </main>
    </div>
  )
}

export default Editor
