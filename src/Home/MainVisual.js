import React, {Component} from 'react';
import MainVisualNotification from './MainVisualNotification';

class MainVisual extends Component {
    render() {
        return (
            <div className="main-visual-container">
                <span className="title">MainVisual</span><br/>
                <span>및 이벤트공지 뉴스</span>
                <MainVisualNotification/>
            </div>
        );
    }
}

export default MainVisual;