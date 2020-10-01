import React, { Component } from 'react'

 class Forms extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userName:'',
              comments:'',
              topic:'React'
         }
     }

     handelChangeEvent = event =>{
        this.setState({
            userName: event.target.value
        })
     }
     handleCommentsEvent =event =>{
         this.setState({
             comments: event.target.value
         })
     }
     handelSelectEvent= event =>{
        this.setState({
            topic: event.target.value
        })
     }
     handelSubmit= event =>{
        
             alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
             event.preventDefault()
        
     }
     
    render() {
        return (
           <form onSubmit ={this.handelSubmit}>
               <div>
                   <label>Username</label>
                   <input type="text" value ={this.state.userName} onChange ={this.handelChangeEvent}></input>
               </div>
               <div>
                   <label>Comments</label>
                   <textarea value ={this.state.comments} onChange ={this.handleCommentsEvent}></textarea>
               </div>
               <div>
                   <label>Topic</label>
                   <select value={this.state.topic} onChange ={this.handelSelectEvent}>
                       <option value="React">React</option>
                       <option value ="Angular">Angulat</option>
                       <option value="Native">Native</option>
                   </select>
               </div>
               <button type="submit">Submit</button>
           </form>
        )
    }
}

export default Forms
