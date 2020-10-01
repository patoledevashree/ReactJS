import React, { Component } from 'react'

// class Welcome extends Component{
//     render() {
//     return <h1>Welcome {this.props.name}as {this.props.heroName}</h1>
//     }
// }

class Welcome extends Component{
    render() {
        const {name, heroName} = this.props
    return <h1>Welcome {name} as {heroName}</h1>
    }
}

export default Welcome