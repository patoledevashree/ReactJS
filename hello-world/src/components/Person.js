import React from 'react'

function Person({person}) {
    return (
        <div>
            I am {person.name}. I am {person.age} years old.
        </div>
    )
}

export default Person
