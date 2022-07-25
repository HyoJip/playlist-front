import React, { useState, useEffect } from 'react';
import axios from 'axios';
/*
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../playlist-front/src/api/userLoginAction';
import { response } from 'express';
 */

//로그인 화면
function Login() {
    
    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const onUserIdHandler = (e) => {
        setUserId(e.target.value);
    }
 
    const onUserPwHandler = (e) => {
        setUserPw(e.target.value);
    }
    
    //const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('userId', userId);
        console.log('userPw', userPw);

        /*
        let body = {
            userId : userId,
            userPw : userPw
        }
        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess){
                    props.history.puch('/') // 메인페이지
                }else{
                    alert('아이디 혹은 비밀번호 오류입니다.');
                }

        })
        */
    }

    // login 버튼 클릭 이벤트
    const onClickLogin = (userId, userPw) => {
        console.log('click login')
        axios()
    };

    return(
        <>
        <div style={{ display: 'flex', width: '100%', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
                <h2>Login</h2>
                <br />
                <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
                    <label>ID</label>
                    <input type='text' value={userId} onChange={onUserIdHandler} />
                    <label>PW</label>
                    <input type='password' value={userPw} onChange={onUserPwHandler}/>
                    <br/>
                    <button type="submit">Login</button>
                    <br/>
                    <button type="submit">회원가입</button>
                </form>
        </div>
        </>
    )
}

export default Login;