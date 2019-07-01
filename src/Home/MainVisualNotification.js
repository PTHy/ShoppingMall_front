import React from 'react';
import MainVisualNotificationItem from './MainVisualNotificationItem';

const MainVisualNotification = (props) => {
    return (
        <div className="notification-container">
            Shopping New & Event
            <hr className="dotted-hr"/>
            <ul>
                <MainVisualNotificationItem/>
            </ul>
        </div>
    );
};

export default MainVisualNotification;