import React from 'react'
import WelcomeUser from './functional-component/WelcomeUser'
import UserDetails from './class-compoents/UserDetails'
import GreetPerson from './functional-component/GreetPerson'
import SayHello from './class-compoents/SayHello'
import ParentClass from './class-compoents/ParentClass'
import PropComponent from './class-compoents/PropComponent'
import ReactStylesParent from './functional-component/ReactStylesParent'

let App = () => {

  function alertOk(child) {
   // alert("Clicked from "+child);
   alert(`I have been clicked from ${child}`);
    //Template literals
  }

  return(
    <>
      {/*<PropComponent name="TCS Angular" childBtnFunc={alertOk}/>*/}
      <ReactStylesParent showColor={true}/>
    </>
  );
} 

export default App;
