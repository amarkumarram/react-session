import React, {Component} from 'react'
import ChildClass from './ChildClass'

class ParentClass extends Component {

    constructor(props) {
        super(props);
        console.log("Parent class constructor");
        this.state = {
            name: "Angular"
        }
        
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Parent class getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("Parent class componentDidMount");
        //Should make AJAX call/server call/ API call
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Parent class shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Parent class getSnapshotBeforeUpdate");
        //Should make AJAX call/server call/ API call
        return null;
    }

    componentDidUpdate() {
        console.log("Parent class componentDidUpdate");
        //Should make AJAX call/server call/ API call
    }

    changeMessage() {
        this.setState({
            name: "React"
        });
    }

    render() {
        console.log("Parent class render");
        return(
            <>
                <h1>This is parent class</h1>
                <ChildClass />
                <button onClick={() => this.changeMessage()}>Change Message</button>{this.state.name}
            </>
        )
    }

}

export default ParentClass;