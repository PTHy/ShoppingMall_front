import React, {Component} from 'react';
import './Header.scss';
import TypeList from './TypeList';
import Navigation from './Navigation';
import Search from './Search';
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom";

@inject('stores')
@observer
class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <Navigation user={ this.props.stores.userStore.user }/>
                <Link to="/"><div className="title">OO쇼핑몰</div></Link>
                <Search/>
                <TypeList />
            </div>
        );
    }
}

export default Header;