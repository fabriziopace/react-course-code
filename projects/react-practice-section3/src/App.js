import React, { useState } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

const app = props => {
  const [userState, setUsersState] = useState({
    users: [
      { username: 'ricky' }
    ]
  });

  const changeUsernameHandler = (event) => {
    setUsersState({
      users: [
        { username: event.target.value }
      ]
    })
  }

  const style = {
    height: '30px',
    border: 'none',
    backgroundColor: '#2ecc71',
    color: 'white',
    paddingLeft: '.5rem'
  };

  return (
    <div className="app">
      <UserOutput username={userState.users[0].username} />
      <UserOutput username={userState.users[0].username} />
      <UserInput style={style} change={changeUsernameHandler} />
    </div>
  );
}


export default app;
