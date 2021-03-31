import React, {Component} from 'react'
import PV from 'prop-types'

class PropComponent extends Component {
    render() {
        return(
            <>
                <h1>I work in {this.props.name}</h1>
                <h1>I work as a {this.props.desg}</h1>
                <button onClick={() => this.props.childBtnFunc('child component')}>Click Me</button>
            </>
        )
    }
}

PropComponent.defaultProps = {
    name: "TCS React",
    desg: "Developer"
}

PropComponent.propTypes = {
    name: PV.string.isRequired,
    desg: PV.oneOfType([PV.string, PV.number]),
    childBtnFunc: PV.func
}

export default PropComponent;