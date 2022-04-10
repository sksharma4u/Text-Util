import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        // console.log("on change handled...");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        // console.log("Button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleclText = () => {
        let newText = '';
        setText(newText);
    }

    const handleREStext = () => {
        let newText = text.trim();
        setText(newText);
    }

    const handleCText = () => {
        let copyText = document.getElementById('myBox');
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        
        navigator.clipboard.writeText(copyText.value);

        alert("Text Copied Successfully!!!");
    }

    const [text, setText] = useState("Enter Your Text Here");
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
                </div>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleloClick}>Convert To Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleclText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleREStext}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleCText}>Copy Text</button>
            </div>

            <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>Your Text Summary</h1>
                
                <p>Total Words: {text.split(' ').length} and Total Characters: {text.length}</p>
                <p>{0.008 * text.split(' ').length * 60} seconds required to read the above text</p>

                <h2 style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something in the textbox above to preview it."}</p>
            </div>
        </>
    )
}
