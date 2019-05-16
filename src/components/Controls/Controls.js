import React, { useState } from 'react';
import GoogleVoiceIcon from '../../images/voice.svg';
import ControlButtons from './ControlButtons/ControlButtons';

const Controls = (props) => {
    const browserSpecificRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    const [recognition] = useState(browserSpecificRecognition);
    const [disableStart, setDisableStart] = useState(false);
    const [disablePause, setDisablePause] = useState(false);
    const [error, setError] = useState(null);
    let [speechText, setSpeechText] = useState();

    const startRecognition = (event) => {
        event.preventDefault();
        recognition.lang = 'en-IN';
        recognition.continuous = true;
        // recognition.interimResults = true;
        // recognition.maxAlternatives = 5;
        setDisableStart(true);
        disablePause && setDisablePause(false)
        recognition.start();
    };

    recognition.onresult = (event) => {
        console.log('event.results===', event.results)
        const resultsLength = event.results.length;
        for (let i = event.resultIndex; i < resultsLength; i++) {
            const transcript = event.results[i][0].transcript;
            speechText = speechText ? speechText.concat(transcript) : transcript;
            setSpeechText(speechText);
        }
    };

    recognition.onerror = (event) => {
        setError(event.error);
    };

    const pauseRecognition = (event) => {
        event.preventDefault();
        setDisablePause(true);
        disableStart && setDisableStart(false)
        recognition.stop();
    };

    return (
        <div className="controls mt-4">
            <form>
                <h3>
                    Add Note
                    <span className="pl-1">
                        <img
                            src={GoogleVoiceIcon}
                            alt="Not available"
                            style={{ width: '30px', height: '20px' }}
                            onClick={(event) => startRecognition(event)} />
                    </span>
                </h3>
                <textarea
                    rows="10"
                    className="form-control mt-4"
                    name="text"
                    placeholder="Your voice enabled text here......"
                    value={speechText} />
                <ControlButtons
                    startRecognition={(event) => startRecognition(event)}
                    pauseRecognition={(event) => pauseRecognition(event)}
                    disableStart={disableStart}
                    disablePause={disablePause}
                />
                {
                    error &&
                    <div className="alert alert-danger mt-3">
                        <div className="w-100 row">
                            <div className="col-md-11">Error occurred in recognition </div>
                            <div
                                className="col-md-1 text-right"
                                onClick={() => setError(null)}>
                                &#10007;
                        </div>
                        </div>
                    </div>
                }
            </form>
        </div>
    );
};

export default Controls;
