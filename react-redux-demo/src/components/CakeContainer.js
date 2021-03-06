import React from 'react'
import { buyCake } from '../redux'
import { connect } from "react-redux";

function CakeContainer(props) {
    return (
        <div>
            <h1>No of Cakes - {props.numOfCakes}</h1>
            <button onClick ={props.buyCake}>Buy A Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => {
            dispatch(buyCake())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
