import React, { useState, useEffect } from 'react';
import ControlButtons from './ControlButtons/ControlButtons';
import Note from './Note/Note';
import ErrorDescription from '../ErrorDescription/ErrorDescription';

const Controls = (props) => {
    const browserSpecificRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    const [recognition] = useState(browserSpecificRecognition);
    const [disableStart, setDisableStart] = useState(false);
    const [disablePause, setDisablePause] = useState(false);
    const [error, setError] = useState(null);
    let [speechText, setSpeechText] = useState();

    // useEffect(() => {
    //     recognition.lang = 'en-IN';
    //     recognition.continuous = true;
    //     recognition.start();
    // }, []);

    const startRecognition = (event) => {
        event.preventDefault();
        if (!disableStart) {
            recognition.lang = 'en-IN';
            recognition.continuous = true;
            // recognition.interimResults = true;
            // recognition.maxAlternatives = 5;
            setDisableStart(true);
            disablePause && setDisablePause(false)
            recognition.start();
        }
    };

    recognition.onresult = (event) => {
        const resultsLength = event.results.length;
        for (let i = event.resultIndex; i < resultsLength; i++) {
            const transcript = event.results[i][0].transcript;
            speechText = speechText ? speechText.concat(transcript) : transcript;
            setSpeechText(speechText);
        }
    };

    // recognition.onerror = (event) => {
    //     setError(event.error);
    // };

    const pauseRecognition = (event) => {
        event.preventDefault();
        setDisablePause(true);
        disableStart && setDisableStart(false)
        recognition.stop();
    };

    return (
        <div className="controls mt-4">
            <form className="controls-form">
                <Note
                    startRecognition={(event) => startRecognition(event)}
                    disableStart={disableStart}
                    speechText={speechText}
                />

                <ControlButtons
                    startRecognition={(event) => startRecognition(event)}
                    pauseRecognition={(event) => pauseRecognition(event)}
                    disableStart={disableStart}
                    disablePause={disablePause}
                />
                {error && <ErrorDescription setError={(setNull) => setError(setNull)} />}
            </form>
        </div>
    );
};

export default Controls;
