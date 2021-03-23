import React,{Component} from 'react'

class UserDetails extends Component{
    constructor(){
        super();
        this.state = {
            name: "ABC",
            desg: "Developer"
        }
    }
    
    //There is only 1 method mandatory to use
    render(){
        return(
            <h2>Welcome {this.state.name}</h2>
        )
    }
}

export default UserDetails;