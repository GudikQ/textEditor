import React, {useState, useEffect} from 'react';
import './ControlPanel.css';

export const ControlPanel = ({selectedWordText, selectedWord, makeBold, makeItalic, makeUnderlined, word, replace}) => {
    const [synonyms, setSynonyms] = useState([]);

    useEffect(() => {
        findSynonyms();
    }, [selectedWordText]);

    const findSynonyms = () => {
        fetch('https://api.datamuse.com/words?rel_syn=' + selectedWordText + '')
            .then(res => res.clone().json())
            .then(res => {
                const listOfSynonyms = [];
                res.forEach(value => {
                    listOfSynonyms.push(value.word);
                });

                setSynonyms(listOfSynonyms);
            })
            .catch(error => {
                setSynonyms([]);
            });
    };

    const synonymsList = synonyms.map((syn, index) => (
        <div key={index}
             className="syn"
             onClick={() => replace(syn, selectedWord)}
        >
            {syn}
        </div>));

    return (
        <div id="control-panel" className="control-panel">
            <div id="format-actions">
                <button className={`format-action ${word && word.bold ? 'active' : ''}`}
                        type="button" onClick={e => makeBold(selectedWord)}>
                    <b>B</b>
                </button>
                <button className={`format-action ${word && word.itallic ? 'active' : ''}`}
                        type="button" onClick={e => makeItalic(selectedWord)}>
                    <i>I</i>
                </button>
                <button className={`format-action ${word && word.underlined ? 'active' : ''}`}
                        type="button" onClick={e => makeUnderlined(selectedWord)}>
                    <u>U</u>
                </button>

            </div>
            {synonyms.length > 0 && <div className="synonyms">
                <div className="box">
                    {synonymsList}
                </div>
            </div>}
        </div>
    )
};
