import axios from 'axios';




function Join() {

    
    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')
    const [userNm, setUserNm] = useState('')
    const [userNickNm, setUserNickNm] = useState('')
    const [userPhone, setUserPhone] = useState('')

    const onUserIdHandler = (e) => {
        setUserId(e.target.value);
    }

    const onUserPwHandler = (e) => {
        setUserPw(e.target.value);
    }

    const onUserNmHandler = (e) => {
        setUserNm(e.target.value);
    }

    const onUserNickNmHandler = (e) => {
        setUserNickNm(e.target.value);
    }

    const onUserPhoneHandler = (e) => {
        setUserPhone(e.target.value);
    }


    return(
        <div style={{ display: 'flex', width: '100%', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
            <h2>회원가입</h2>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
                    <label>아이디</label>
                    <input type='text' value={userId} onChange={onUserIdHandler} />
                    <button type="submit">아이디중복</button>
                    <label>비밀번호</label>
                    <input type='password' value={userPw} onChange={onUserPwHandler}/>
                    <label>비밀번호 확인</label>
                    <input type='password' value={userPw} onChange={onUserPwHandler}/>
                    <label>이름</label>
                    <input type='text' value={userNm} onChange={onUserNmHandler}/>
                    <label>닉네임</label>
                    <input type='text' value={userNickNm} onChange={onUserNickNmHandler}/>
                    <label>핸드폰 번호</label>
                    <input type='text' value={userPhone} onChange={onUserPhoneHandler}/>
                    <br/>
                    <button type="submit">회원가입</button>
                </form>
        </div>
    )




}