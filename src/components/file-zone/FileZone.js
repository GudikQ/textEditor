import React, {useState} from 'react';
import './FileZone.css';

export const FileZone = ({text, addWord}) => {

    const [newText, setNewText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (newText.length) {
            addWord(newText);
            setNewText('')
        }
    };

    const handleChange = e => {
        setNewText(e.target.value)
    };

    return (
        <div id="file-zone" className="file-zone">
            <div id="file" className="file">
                <p className="predefined-text">
                    {text}
                </p>
                <textarea className="input"
                          value={newText}
                          onChange={handleChange}
                />
                <button
                    className="btn"
                    onClick={handleSubmit}>Submit
                </button>
            </div>
        </div>
    );
};

