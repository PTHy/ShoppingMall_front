import React, {Component} from 'react';

import UserRegister from './UserRegister';
import UserLogin from './UserLogin';
import {inject, observer} from "mobx-react";
import { Redirect, Link } from 'react-router-dom';
import './User.scss';

@inject('stores')
@observer
class User extends Component {
    state = {
        account: '',
        password: ''
    };
    render() {
        let u = this.props.stores.userStore;

        if (u.user)
            return (
                <div>
                    로그인 되었습니당 {u.user.name}
                </div>
            );

        if (this.props.match.params.command === 'register')
            return <UserRegister />;

        if (!u.user)
            return <UserLogin account={this.state.account} password={this.state.password} handleChange={this.handleChange} handleLogin={this.handleLogin}/>;
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
        });
    };

    handleLogin = async () => {
        console.log('로그인 처리');

        if (!this.isValid()) {
            alert('모든 항목을 입력해주세요');
            return;
        }
        if (await this.props.stores.userStore.login(this.state)) {
            alert('로그인에 성공하였습니다');
            this.setState({
                ...this.state,
                goToUser: true,
            });
        } else {
            alert('로그인 실패');
        }
    };

    isValid = () => {
        for (let item in this.state) {
            if (item !== 'goToUser' && !this.state[item])
                return false;
        }
        return true;
    }
}

export default User;