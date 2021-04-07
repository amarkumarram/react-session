import React, {useState} from 'react'
function HooksState() {
    
    const [currentCount, updateCounter] = useState(0);
    //const [currentValue, setterMethod] = useState(prevValue)

    let setStyle = {
        textAlign: "center"
    }

    let incrementByTwo = () => {
        for(let i=0; i<2; i++){
            updateCounter(prevState => prevState + 1 );
        }
    }

    return(
        <div style={setStyle}>
            <button onClick={incrementByTwo}>Incremented by {currentCount}</button>
        </div>
    )

}

export default HooksState;