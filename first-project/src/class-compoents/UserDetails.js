import React,{Component} from 'react'

class UserDetails extends Component{
    constructor(){
        super();
        this.state = {
            rank: 0
        }
    }

    updateMessage() {
        //this.state.rank = this.state.rank + 1;
        /*this.setState({
            rank: this.state.rank + 1
        }, () => {
            console.log(this.state.rank);
        });*/
        this.setState((prevState) => ({
            rank: prevState.rank + 1
        }),() => {
            console.log(this.state.rank);
        });
    }

    callUpdateMessageTwice() {
        this.updateMessage();
        this.updateMessage();
    }
    //React takes all state calls in a single call
    
    //There is only 1 method mandatory to use
    render(){
        const {username, age} = this.props;
        const {rank} = this.state;
        return(
            <>
                <h3>Welcome {username} of {age} years old.</h3>
                <h2>{rank}</h2>
                <button onClick={() => this.callUpdateMessageTwice()}>Change Message</button>
            </>
        )
    }
}

export default UserDetails;