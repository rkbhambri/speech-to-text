import React from 'react';

const ControlButtons = (props) => {
	return (
		<div className="control-buttons w-100 mt-3">
			<button
				className="col-md-4 btn btn-md btn-info m-2"
				onClick={(event) => props.startRecognition(event)}
				disabled={props.disableStart}>
				Start Recognition
            </button>
			<button
				className="col-md-4 btn btn-md btn-info m-2"
				onClick={(event) => props.pauseRecognition(event)}
				disabled={props.disablePause}>
				Pause Recognition
			</button>
		</div>
	);
};

export default ControlButtons;
