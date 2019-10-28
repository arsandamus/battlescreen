import React from 'react';
import './Commands.css';

class Commands extends React.Component {
    state = {
       attack: 0
    }


render() {
    return (
        <div className="commands-area">
            <h2>Commands</h2>
            <ul>
                <li>Attack</li>
                <li>Items</li>
                <li>Escape</li>
            </ul>
        </div>
    )
}
}

export default Commands
