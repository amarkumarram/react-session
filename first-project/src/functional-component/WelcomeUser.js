import React from "react";

function WelcomeUser(props){
   const {username, age} = props;
   return <h3>Welcome {username} of {age} years old.</h3>;
}
export default WelcomeUser;