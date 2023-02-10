import React, { useState } from 'react'





const Test = () => {

    const [count, setCount] = useState(5);
    return (
        <h1>
            Hey - {count}
            <br />

            <button className='bg-purple-700 text-white px-4 py-2 rounded-md' onClick={() => setCount(count + 5)} >Add by 5</button>
        </h1>
    )
}
export default Test