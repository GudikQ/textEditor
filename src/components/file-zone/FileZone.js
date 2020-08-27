import React, {useState} from 'react';
import './FileZone.css';

export const FileZone = ({string, addWord}) => {

    const [newText, setNewText] = useState(string);

    const handleSubmit = () => {
        //e.preventDefault();
        console.log('click btn')
        addWord(newText);
        //console.log('testContrainer btn')
        // if (newText.length) {
        //     
        //     setNewText()
        // }
    };

    const handleChange = e => {
        setNewText(e.target.value)
    };

    return (
        <div id="file-zone" className="file-zone">
            <div id="file" className="file">
                <p className="predefined-text" id="text" >
                    {newText}
                </p>
                <div>1123</div>
                <textarea className="input"
                          value={newText}
                          onChange={handleChange}
                />
                <button
                    className="btn"
                    onClick={handleSubmit}
                    disabled={!newText.trim()}>
                        Submit
                </button>
            </div>
        </div>
    );
};