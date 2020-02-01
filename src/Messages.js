// 14.8 Intro to Testing

import React from 'react';
import './Messages.css';

//functional component
export default function Messages(props) {
    const badge = props.unread
        ? <div className="unread_count badge">{props.unread}</div>
        : null;
    return (
        <div className="messages">
            {props.name}
            {badge}
        </div>    
    );
}




