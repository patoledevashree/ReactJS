import React, { Component } from 'react'

class MountLifecycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Devashree'
        }
        console.log('Lifecycle Mount constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle Mount getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('Lifecycle Mount componentDidMount')
    }

    render() {
        console.log('render')
        return (
            <div>
                Lifecycle Mount
            </div>
        )
    }

}

export default MountLifecycle
