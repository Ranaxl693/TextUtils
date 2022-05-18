
import React, { useState } from 'react'

export default function TextUtils(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCases = (txtcase) => {
        let updatedString;
        let alertMsg;
        switch (txtcase) {
            case 'uppercase':
                updatedString = text.toUpperCase();
                alertMsg = 'Coverted to Uppercase!';
                break;
            case 'lowercase':
                updatedString = text.toLowerCase();
                alertMsg = 'Coverted to Lowercase!';
                break;
            case 'cleartext':
                updatedString = '';
                alertMsg = 'All text cleared!';
                break;
            default:
                updatedString = '';
                alertMsg = '';
        }
        setText(updatedString);
        props.showAlert(alertMsg, "success"); 
    }

    const wordCount = (txtcase) => {
        return txtcase.split(" ").filter(function(getText) { return getText !== '' }).length;
    }

    return (
        <div className='container mt-3' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Text Utils</h2>
            <textarea className="form-control mt-3" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} placeholder="Start Writing..." rows="8"></textarea>
            <div className="btn-wrapper my-3">
                <button type="button" className="btn btn-primary mr-2" onClick={() => handleCases('uppercase')}>Change to Uppercase</button>
                <button type="button" className="btn btn-secondary mx-2" onClick={() => handleCases('lowercase')}>Change to Lowercase</button>
                <button type="button" className="btn btn-danger mx-2" onClick={() => handleCases('cleartext')}>Clear all</button>
            </div>
            <div className="wordresults my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h3>Results:</h3>
                <p> {Math.round(0.008 * wordCount(text))} Minutes to Read</p>
                <p> Words Count: {wordCount(text)} and Words Length: {text.length} </p>
            </div>
            <div className="prevoew my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h3>Preview Output:</h3>
                <p> {text} </p>
            </div>
        </div>
    );
}