import React, {Component} from 'react'

class ChildClass extends Component {

    constructor(props) {
        super(props);
        console.log("Child class constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Child class getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("Child class componentDidMount");
        //Should make AJAX call/server call/ API call
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Child class shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Child class getSnapshotBeforeUpdate");
        //Should make AJAX call/server call/ API call
        return null;
    }

    componentDidUpdate() {
        console.log("Child class componentDidUpdate");
        //Should make AJAX call/server call/ API call
    }
    
    render() {
        console.log("Child class render");
        return(
            <>
                <h1>This is a child class</h1>
            </>
        )
    }

}

export default ChildClass;