import React from 'react'
import WelcomeUser from './functional-component/WelcomeUser'
import UserDetails from './class-compoents/UserDetails'

let App = () => {
  return(
    <>
      <WelcomeUser username="functional component" />
      <UserDetails username="class component" />
    </>
  );
} 

export default App;
