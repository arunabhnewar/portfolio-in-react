import React from 'react';

const title = ({ title, span }) => {
    return (
        <div className="title">
            <h3>
                {title}
                <span> {span}</span>
            </h3>
        </div>
    );
};

export default title;