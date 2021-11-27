import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';
import UserHandler from './handler/user';

function App() {
  const [userName, setUserName] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const onClickUserRegist = async () => {
    console.log(userName, userDesc, userId, userPw);
    if (await UserHandler.create({ userName, userDesc, userId, userPw })) {
      alert('회원가입 성공');
    } else {
      alert('회원가입 실패');
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
          label="유저 소개"
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
          onClick={() => {
            onClickUserRegist();
          }}
          variant="standard"
        >
          회원가입
        </Button>
      </div>
    </div>
  );
}

export default App;
