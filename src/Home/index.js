import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div className='btn-small'><Link to='/user'>유저</Link></div>
            </div>
        );
    }
}

export default Home;