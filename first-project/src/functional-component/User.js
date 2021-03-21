import React from 'react'

let User = (props) => {
    return <h1>I am {props.userName}. I am {props.age} years old. {props.children}</h1>
}

export default User;

//props is immutable