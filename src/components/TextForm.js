import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpperClick = () => {
        let newText = text.toUpperCase()
        setText(newText);
    }
    const handleOnChange = (event) => {
       setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperClick}>Convert to Uppercase</button>
        </>
    )
}