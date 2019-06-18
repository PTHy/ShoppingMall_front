import React from 'react';
import { Link } from 'react-router-dom';
const UserLogin = (props) => {
    return (
        <div>
            <h2>로그인 하기</h2>
            <hr/>
            아이디 : <input id='account' placeholder='아이디를 입력하세요' value={props.account} onChange={props.handleChange} type="text"/><br/>
            비밀번호 : <input id='password' placeholder='비밀번호를 입력하세요' value={props.password} onChange={props.handleChange} type="password"/><br/>
            <div>
                <div className='btn-small' onClick={props.handleLogin}>로그인</div>
                <div className='btn-small'><Link to='/user/register'>회원가입</Link></div>
            </div>
        </div>
    );
};

export default UserLogin;