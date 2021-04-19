import React, { useState } from 'react';
import './Example.sass';


const Example = () => {

    const [count, setCount] = useState(9007199254740980);

    return (
        <div className="example-wrapper">
            <p>
                You clicked {count} times
            </p>
            <button onClick={() => setCount(count - 1)} className="example-button">
                -1
            </button>
            <button onClick={() => setCount(count + 1)} className="example-button">
                +1
            </button>

        </div>
    );
};

export default Example;