import React from 'react';
import { Link } from 'react-router-dom';
import './User.scss';

const UserLogin = (props) => {
    return (
        <div>
            <h2>로그인 하기</h2>
            <hr/>
            <div>
                아이디 : <input id='account' placeholder='아이디를 입력하세요' value={props.account} onChange={props.handleChange} type="text"/><br/>
                비밀번호 : <input id='password' placeholder='비밀번호를 입력하세요' value={props.password} onChange={props.handleChange} type="password"/>
                <div className='btn-small' onClick={props.handleLogin}>로그인</div>
            </div>
            <span>아직 아이디가 없으신가요? <Link to='/user/register'><span className='go-register-text'>회원가입하러가기</span></Link></span>
        </div>
    );
};

export default UserLogin;