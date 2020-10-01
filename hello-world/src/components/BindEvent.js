import React, { Component } from 'react'

class BindEvent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        // this.clickhandler =this.clickhandler.bind(this)
    }
    // clickhandler(){
    //     this.setState({
    //         message:'GoodBye!'
    //     })
    // }
    clickhandler =()=>{
        this.setState({
            message:'GoodBye!'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick ={this.clickhandler.bind(this)}>Click Me</button> */}
                {/* <button onClick ={()=>this.clickhandler()}>Click Me</button> */}
                <button onClick ={this.clickhandler}>Click Me</button>
            </div>
        )
    }
}

export default BindEvent
