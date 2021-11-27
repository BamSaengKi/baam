import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const onClickUserRegist = async () => {
    console.log(userName, userDesc, userId, userPw);
    try {
      const apiResult = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          user_nm: userName,
          user_desc: userDesc,
          user_login_id: userId,
          user_login_pw: userPw,
        }),
      });
      console.log(apiResult);
    } catch (error) {
      console.log('오류발생:, { e }');
    }
  };

  return (
    <div className="app-container">
      <div>
        <TextField
          label="유저이름"
          variant="standard"
          fullWidth
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="유저 설명"
          variant="standard"
          fullWidth
          value={userDesc}
          onChange={(e) => setUserDesc(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="유저 아이디"
          variant="standard"
          fullWidth
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="유저 비밀번호"
          variant="standard"
          fullWidth
          value={userPw}
          onChange={(e) => setUserPw(e.target.value)}
        />
      </div>
      <div>
        <Button
          fullWidth
          onClick={() => onClickUserRegist()}
          variant="standard"
        >
          회원가입
        </Button>
      </div>
    </div>
  );
}

export default App;
