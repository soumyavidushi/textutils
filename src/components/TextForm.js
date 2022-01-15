import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick = () => {
        setText('');
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(' '));
        props.showAlert("Removed extra spaces","success");
    }
    const handleOnChange = (event) => {
       setText(event.target.value);
    }
    const parseHTML = () => {
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(text, 'text/html');
    }
    const getWordCount = () => {
        const wordArray = text.split(' ').filter(item => item!=='');
        let len = wordArray.length;
        return len;
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: (props.mode === 'dark' ? 'white' : '#042743')}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} style={{backgroundColor: (props.mode === 'dark' ? 'grey' : 'white')}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpperClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: (props.mode === 'dark' ? 'white' : 'black')}}>
                <h1>Your text summary</h1>
                <p>{getWordCount()} words, {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter the text in textbox to preview'}</p>
            </div>
        </>
    )
}