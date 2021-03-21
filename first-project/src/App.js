import React from 'react'
import User from './functional-component/User'
import Employee from './class-compoents/Employee'

let App = () => {
  return(
    <>
      <User userName="ABC" age="12" >I am a User</User>
      <Employee desg="Manager" >I am an Employee</Employee>
    </>
  );
} 
export default App;
