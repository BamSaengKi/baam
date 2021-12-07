import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';
import UserHandler from './handler/user';

import { Main, Signin, Signup, NoticeBoard } from './pages'


function App() {

  const [page, setPage] = useState('/Main');

  const getPage = () => {
    switch (page) {
      case '/Signup':
        return <Signup></Signup>
      case '/Signin':
        return <Signin></Signin>
        case '/NoticeBoard':
          return <NoticeBoard></NoticeBoard>
      case '/Main':
      default:
        return <Main></Main>
    }
  }


  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyItems: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <div style={{width: '100%', height: '10%',display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', borderBottom: '1px solid lightgray'}}>
        
          <Button varint="standards" onClick={() => { setPage('/Main') }}>메인</Button>
       
        <Button varint="standards" onClick={() => { setPage('/NoticeBoard') }}>게시판</Button>
        <Button varint="standards" onClick={() => { setPage('/Signup') }}>회원가입</Button>
        <Button varint="standards" onClick={() => { setPage('/Signin') }}>로그인</Button>
      </div>
      <div style={{width: '100%', height: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {getPage()}
      </div>
    </div>
  )


}

export default App;
