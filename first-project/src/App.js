import React from 'react'
import WelcomeUser from './functional-component/WelcomeUser'
import UserDetails from './class-compoents/UserDetails'
import GreetPerson from './functional-component/GreetPerson'
import SayHello from './class-compoents/SayHello'
import ParentClass from './class-compoents/ParentClass'

let App = () => {
  return(
    <>
      <ParentClass />
    </>
  );
} 

export default App;
