import React, { useState } from 'react'


export default function TextForm(props) {
    const UpperClick = () => {
        // console.log("Uppercase was clicked " + text);
        let upCase = text.toUpperCase();
        setText(upCase);
        props.showAlert("Converted to Upper case!", "success");
    }

    const LowerClick = () => {
        let downCase = text.toLowerCase();
        setText(downCase);
        props.showAlert("Converted to Lower case!", "success");
    }

    const CopyAll = () => {
        console.log("I am copy");
        let box = document.getElementById('My-Text_Box');
        box.select();
        navigator.clipboard.writeText(box.value);
        props.showAlert("Copy to clickbord!","success")
    }

    const RemoveAll = () => {
        let remove = text.replace(text, "");
        setText(remove);
        props.showAlert("Text cleared!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value);
    }

  

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#353a40' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleOnChange} id="My-Text_Box" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={UpperClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={LowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={CopyAll}>Copy all text</button>
                <button className="btn btn-primary mx-3" onClick={RemoveAll}>CLEAR</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>YOUR TEXT SUMMARY</h2>
                <p><b>{text.split(' ').length} words and {text.length} characters</b></p>
                <p>Minutes read: {0.008 * text.split(' ').length} min</p>
                <h3>PREVIEW</h3>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here."}</p>
            </div>
        </>
    )
}
