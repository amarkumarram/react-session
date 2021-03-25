import React, {Component} from 'react'

class SayHello extends Component {

    constructor() {
        super();
        this.state = {
            message : "Say Class Hello",
            count: 0
        }
    }

    say() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count);
        });
    }

    render() {
        return(
            <button onClick={() => this.say()}>Count Increment</button>
        );
    }
}

export default SayHello;