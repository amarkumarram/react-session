import React, {Component} from 'react'

class Employee extends Component{
    //mandatory method
    render() {
        return <h1>I am {this.props.desg}. {this.props.children}</h1>;
    }
}

export default Employee;