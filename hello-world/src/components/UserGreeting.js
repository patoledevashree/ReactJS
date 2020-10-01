import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {

        //If Else
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <h1>Welcome Devashree</h1>
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //             <h1>Welcome Guest</h1>
        //         </div>
        //     )
        // }
        //Element Variables
        // let message;
        // if(this.state.isLoggedIn)
        // {
        //     message= <div>Welcome Devashree</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        // return(
        //     <div>{message}</div>
        // )

        //ternary operator
    //    return this.state.isLoggedIn? (
    //     <div>Welcome Devashree</div>
    //    ):(
    //     <div>Welcome Guest</div>
    //    )

    //Short Circuit operator
    return this.state.isLoggedIn && <div>Welcome Devashree</div>
    }
}

export default UserGreeting
