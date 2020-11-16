import React, { useState, useEffect, useMemo } from 'react'
import './App.css'
import { ControlPanel } from './components/control-panel/ControlPanel'
import { FileZone } from './components/file-zone/FileZone'
import { Word } from './components/word/Word'
import getMockText from './text.service'

const App = () => {
  const [words, setWords] = useState([])
  const [selectedWord, setSelectedWord] = useState('')
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMockText()
        const wordsArray = response.split(' ')
        const words = wordsArray.map(word => ({
          word: word,
          bold: false,
          underlined: false,
          itallic: false,
        }))
        setWords(words)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [])

  const makeBold = wordId => {
    if (!(wordId > 0)) return false

    const formattedWords = words.map((word, idx) => ({
      ...word,
      bold: idx === wordId ? !word.bold : word.bold,
    }))

    setWords(formattedWords)
  }

  const makeUnderlined = wordId => {
    if (!(wordId > 0)) return false

    const formattedWords = words.map((word, idx) => ({
      ...word,
      underlined: idx === wordId ? !word.underlined : word.underlined,
    }))

    setWords(formattedWords)
  }

  const makeItalic = wordId => {
    if (!(wordId > 0)) return false

    const formattedWords = words.map((word, idx) => ({
      ...word,
      itallic: idx === wordId ? !word.itallic : word.itallic,
    }))

    setWords(formattedWords)
  }

  const addWord = word => {
    setWords(words => [
      ...words, { word: word, bold: false, itallic: false, underlined: false }
      ])
  }

  const replace = (newWord, wordId) => {
    if (newWord && wordId) {
      const wordList = words.map((word, idx) => ({
        ...word,
        word: idx === wordId ? newWord : word.word,
      }))
      setWords(wordList)
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
    <div className="App">
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
        <FileZone text={text} addWord={addWord} error={error}/>
      </main>
    </div>
  )
}

export default App;