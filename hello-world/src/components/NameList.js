import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['ABC','PQR','XYZ']
const nameList = names.map((name,index) => <h2 key ={index}>{index}{name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )

// const persons =[
//     {
//         id:1,
//         name:'Devashree',
//         age:30
//     },
//     {
//         id:2,
//         name:'Siddhu',
//         age:28
//     }
// ]

// const personList = persons.map(person => <Person key= {person.id} person = {person}></Person>)

// return <div>{personList}</div>
 }

export default NameList
