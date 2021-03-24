import React from 'react'
import WelcomeUser from './functional-component/WelcomeUser'
import UserDetails from './class-compoents/UserDetails'

let App = () => {
  return(
    <>
      <WelcomeUser username="functional component" age="24" />
      <UserDetails username="class component" age="27" />
    </>
  );
} 

export default App;
