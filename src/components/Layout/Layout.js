
import React from 'react';
import Heading from '../Heading/Heading';
import Description from '../Description/Description';
import Controls from '../Controls/Controls';

const Layout = (props) => {
    return (
        <div className="layout col-md-10 offset-1 mt-5 text-center">
            <div className="message-controls col-md-6 offset-3">
                <Heading heading="Voice Controlled Notes App" />
                <Description description="A tiny app that allows you to take notes by recording your voice" />
                <Controls />
            </div>
        </div>
    );
};

export default Layout;
