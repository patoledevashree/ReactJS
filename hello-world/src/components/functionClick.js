import React from 'react'

function functionClick() {
    function clickhandler(){
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick ={clickhandler}>Click me</button>
        </div>
    )
}

export default functionClick
