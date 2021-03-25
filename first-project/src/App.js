import React from 'react'
import WelcomeUser from './functional-component/WelcomeUser'
import UserDetails from './class-compoents/UserDetails'
import GreetPerson from './functional-component/GreetPerson'
import SayHello from './class-compoents/SayHello'

let App = () => {
  return(
    <>
      {/*<WelcomeUser username="functional component" age="24" />
      <UserDetails username="class component" age="27" />*/}
      <GreetPerson message="Greet Person" />
      <SayHello message="Hello" />
    </>
  );
} 

export default App;
