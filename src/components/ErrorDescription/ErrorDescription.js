import React from 'react';

const ErrorDescription = (props) => {
    return (
        <div className="errorDescription alert alert-danger mt-3">
            <div className="w-100 row">
                <div className="col-md-11">Error occurred in recognition </div>
                <div
                    className="col-md-1 text-right"
                    onClick={() => props.setError(null)}>
                    &#10007;
                </div>
            </div>
        </div>
    );
};

export default ErrorDescription;
