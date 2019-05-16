import React, { useState } from 'react';
import { convertTextToSpeech, pause, resume } from '../../Helpers/Controls';

const Controls = (props) => {
    let [message, setMessage] = useState(new SpeechSynthesisUtterance());

    const changeHandler = (event) => {
        message[event.target.name] = event.target.value;
        setMessage(message);
    };

    // Stop speech when page reloads as initially on page load text is empty
    if (message.text.trim().length === 0) {
        speechSynthesis.cancel();
    }

    return (
        <form onChange={(event) => changeHandler(event)}>
            <textarea
                rows="10"
                className="form-control mt-5"
                name="text"
                placeholder="Enter text for speech......" />
            <input
                type="number"
                className="form-control mt-2"
                name="volume"
                placeholder="Set volume 0 to 1"
                step="0.1"
                max="1"
            />
            <input
                type="number"
                className="form-control mt-2"
                name="rate"
                placeholder="Set rate 0.1 to 10"
                max="10"
            />
            <input
                type="number"
                className="form-control mt-2"
                name="pitch"
                placeholder="Set pitch 0 to 2"
                max="2"
            />
            <div className="control-buttons w-100 mt-3">
                <button
                    className="col-md-3 btn btn-md btn-success mt-2"
                    onClick={(event) => convertTextToSpeech(event, message)}>
                    Test
            </button>
                <button
                    className="col-md-3 btn btn-md btn-success mt-2 ml-2"
                    onClick={(event) => pause(event)}>
                    Pause
            </button>
                <button
                    className="col-md-3 btn btn-md btn-success mt-2 ml-2"
                    onClick={(event) => resume(event)}>
                    Resume
            </button>
            </div>
        </form>
    );
};

export default Controls;
