import React, {useState} from 'react'

function HooksStateObject() {

    let empObj = {
        name: "ABC",
        company: "TCS"
    }

    const [currentObj, updateObj] = useState(empObj)

    return(
        <form>
            <input type="text" value={currentObj.name} onChange={(e) => updateObj({name: e.target.value})} />
            <input type="text" value={currentObj.company} onChange={(e) => updateObj({company: e.target.value})} />
            <br/>
            Employee Name: {currentObj.name}<br/>
            Company: {currentObj.company}<br />
            //Spread Operator in Javascript
        </form>
    )
}

export default HooksStateObject;