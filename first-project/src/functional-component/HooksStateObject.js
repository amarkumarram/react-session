import React, {useState} from 'react'

function HooksStateObject() {

    let numArr = [1, 2, 3];

    const [currentArr, updateObj] = useState(numArr);

    let appendNum = () => {
        const x = Math.floor(Math.random() * 11);
        updateObj([...currentArr, x]); //[1,2,3] + New number
        console.log(currentArr);
    }

    return(
        <>
            {currentArr}<br />
            <button onClick={appendNum}>Append Number</button>
        </>
    )

    /**
     * Difference between class component setState method and functional component useState hook
     * 1. setState update and merge objects automatically whereas developer needs to merge objects/array in useState manually
     * 2. setState is ALWAYS an object whereas useState can be a string, number, boolean, array, objects
     */
}

export default HooksStateObject;