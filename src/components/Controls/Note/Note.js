import React from 'react';
import GoogleVoiceIcon from '../../../images/voice.svg';
import Loader from '../../Loader/Loader';

const Note = (props) => {
    return (
        <div className="note w-100">
            <h3>
                Add Note
                <span className="pl-1">
                    <img
                        src={GoogleVoiceIcon}
                        alt="Not available"
                        style={{ width: '30px', height: '20px' }}
                        onClick={(event) => props.startRecognition(event)} />
                    {/* Enable loader when recognition starts */}
                    {props.disableStart && <Loader />}
                </span>
            </h3>
            <textarea
                rows="10"
                className="form-control mt-4"
                name="text"
                placeholder="Your voice enabled text here......"
                value={props.speechText} />
        </div>
    );
};

export default Note;
