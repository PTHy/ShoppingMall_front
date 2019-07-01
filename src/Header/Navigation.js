import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    if (props.user) {
        return (
            <div className="navitaion-container">
                <Link to="/"><span>HOME</span></Link>
                <span>회원정보변경</span>
                <span>고객센터</span>
                <span>장바구니</span>
                <span>배송조회</span>
                <span>마일리지</span>
                <span>이용안내</span>
            </div>
        )
    } else {
        return (
            <div className="navitaion-container">
                <Link to="/"><span>HOME</span></Link>
                <Link to="/user"><span>로그인</span></Link>
                <span>고객센터</span>
                <span>장바구니</span>
                <span>배송조회</span>
                <span>마일리지</span>
                <span>이용안내</span>
            </div>
        )
    }
};

export default Navigation;