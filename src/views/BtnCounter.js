import React, { useState } from 'react'

function BtnCounter() {
     const [Count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount( Count => Count+1)} >Count</button>
            <span className="num__count">{Count}</span>
        </div>
    )
}

export default BtnCounter
