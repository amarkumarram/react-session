import React, {Component} from 'react'

class ReactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            subscribe: false,
            address: '',
            gender: 'other'
        }
    }
    
    styleCss = {
        textAlign: "center"
    }

    nameUpdate = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    changeAddress = event => {
        this.setState({
            address: event.target.value
        });
    }

    updateGender = event => {
        this.setState({
            gender: event.target.value
        });
    }

    checkCheckbox = (event) => {
        this.setState({
            subscribe: event.target.checked
        });
    }

    submitForm = event => {
        event.preventDefault();
        console.log(this.state.name);
    }

    render() {
        return(
            <form style={this.styleCss} onSubmit={this.submitForm}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.nameUpdate} />
                </div>
                <div>
                    <label>Address:</label>
                    <textarea value={this.state.address} onChange={this.changeAddress}></textarea>
                </div>
                <div>
                    <label>Gender:</label>
                    <select value={this.state.gender} onChange={this.updateGender}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Subscribe to this channel:</label>
                    <input type="checkbox" checked={this.state.subscribe} onChange={this.checkCheckbox}/>
                </div>

                <input type="submit" />
            </form>
        )
    }
}

export default ReactForm;