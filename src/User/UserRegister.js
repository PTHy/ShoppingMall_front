import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import { Redirect } from 'react-router-dom';

@inject('stores')
@observer
class UserRegister extends Component {
    state = {
        account: '',
        password: '',
        repassword: '',
        name: '',
        phone: '',
        tel: '',
        zip: '',
        addr: '',
        email: '',
        config: {
            isValidId: false,
            goToUser: false,
        }
    };
    render() {
        if (this.state.config.goToUser)
            return <Redirect to='/user'/>;
        return (
            <div>
                희망아이디: <input id='account' value={this.state.account} onChange={this.handleChange} type="text"/> <button className='btn-small' onClick={this.handleOverlapCheck}>중복확인</button> (6~10자의 영문 및 숫자 가능하며 여백은 사용할 수 없습니다)<br/>
                희망패스워드: <input id='password' value={this.state.password} onChange={this.handleChange} type="password"/> (6~10자 이내로 영문과 숫자의 조합으로 만드세요)<br/>
                패스워드확인: <input id='repassword' onChange={this.handleChange} value={this.state.repassword} type="password"/><br/>
                성명: <input id='name' type="text" onChange={this.handleChange} value={this.state.name}/> (이름에 공백은 제거해 주세요)<br/>
                전화번호: <input id='tel' type="text" onChange={this.handleChange} value={this.state.tel}/><br/>
                핸드폰: <input id='phone' type="text" onChange={this.handleChange} value={this.state.phone}/><br/>
                우편번호: <input id='zip' type="text" onChange={this.handleChange} value={this.state.zip}/> (배달시 혼란을 피하기위해 정확히 기입해주시기 바랍니다)<br/>
                주소: <input id='addr' type="text" onChange={this.handleChange} value={this.state.addr}/><br/>
                이메일: <input id='email' type="text" onChange={this.handleChange} value={this.state.email}/> (올바른 이메일 형식으로 기입해주시기 바랍니다)<br/>
                <button className='btn-small' onClick={this.handleRegister}>회원가입</button>
            </div>
        );
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
        })
    };

    handleRegister = async () => {
        if (!this.isValid())
            return false;

        if (await this.props.stores.userStore.register(this.state)) {
            alert('회원가입에 성공하였습니다');
            this.setState({
                ...this.state,
                config: {
                    ...this.state.config,
                    goToUser: true
                },
            });
        } else {
            alert('회원가입에 실패하였습니다');
        }
    };

    handleOverlapCheck = async () => {
        if (!this.state.account) {
            alert('아이디를 입력해주세요');
            return;
        }

        let isValidId = false;
        if (await this.props.stores.userStore.checkOverlap(this.state.account)) {
            alert('사용 가능한 아이디 입니다');
            isValidId = true;
        }
        else {
            alert('이미 사용중인 아이디 입니다');
            isValidId = false;
        }
        this.setState({
            ...this.state,
            config: {
                ...this.state.config,
                isValidId
            }
        });
    };

    isValid = () => {

        if (!this.state.config.isValidId) {
            alert("아이디 중복확인을 해주세요");
            return false;
        }

        if (this.state.password !== this.state.repassword) {
            alert("비밀번호가 서로 다릅니다");
            return false;
        }

        for (let item in this.state) {
            if (item !== 'config' && !this.state[item]) {
                alert('모든 항목을 입력해주세요');
                return false;
            }
        }
        return true;
    }
}

export default UserRegister;