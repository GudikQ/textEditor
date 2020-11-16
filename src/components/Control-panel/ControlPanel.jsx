import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ControlPanel.css';
import { getSynonyms } from '../../redux/actions';
import { selectSynonyms } from '../../redux/selectors';

const ControlPanel = ({
  selectedWordText,
  selectedWord,
  makeBold,
  makeItalic,
  makeUnderlined,
  word,
  replace
}) => {
  const dispatch = useDispatch()

  const synonyms = useSelector(selectSynonyms)

  useEffect(() => {
    dispatch(getSynonyms(selectedWordText))
  }, [selectedWordText])

  const synonymsList = useMemo(() => {
    return synonyms.map((syn, index) => (
      <div key={index}
           className="syn"
           onClick={() => replace(syn, selectedWord)}
      >
        {syn}
      </div>))
  }, [synonyms])

  return (
    <div id="control-panel" className="control-panel">
      <div id="format-actions">
        <button className={`format-action ${word && word.bold ? 'active' : ''}`}
                type="button" onClick={() => makeBold(selectedWord)}>
          <b>B</b>
        </button>
        <button className={`format-action ${word && word.itallic ? 'active' : ''}`}
                type="button" onClick={() => makeItalic(selectedWord)}>
          <i>I</i>
        </button>
        <button className={`format-action ${word && word.underlined ? 'active' : ''}`}
                type="button" onClick={() => makeUnderlined(selectedWord)}>
          <u>U</u>
        </button>

      </div>
      {synonyms.length > 0 ?
        <div className="synonyms">
          <div className="box">
            {synonymsList}
          </div>
        </div>
        : <div className="synonyms">
          <div className="box">
            No synonyms found
          </div>
        </div>}
    </div>
  )
}

export default ControlPanel
