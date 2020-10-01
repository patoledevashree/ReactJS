import React from 'react';


// function Greet(props){
// return (
//     <div>
//     <h1>Hello {props.name} as {props.heroName}</h1>
//     {props.children}
//     </div>
// ) 
// }
// Destructure Props in function parameter

// function Greet({name,heroName}){
//     return (
//         <div>
//         <h1>Hello {name} as {heroName}</h1>
//         </div>
//     ) 
// }

// Destructure Props in function body
function Greet(props){
    const {name ,heroName } = props;
    return (
        <div>
        <h1>Hello {name} as {heroName}</h1>
        </div>
    ) 
}

export default Greet;