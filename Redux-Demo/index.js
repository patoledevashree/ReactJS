const redux = require('redux')
const createStore = redux.createStore

const Buy_Cake ='Buy_Cake'
//action is defined
function buyCake(){
    return {
        type: Buy_Cake,
        info:'First Redux action'
    }
}

const initialState = {
    numOfCakes:10
}

//reducer (previousState,action) =>newState
const reducer =(state = initialState, action) =>{
    switch(action.type){
        case Buy_Cake: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
//redux store is created
const store = createStore(reducer)
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() =>{
    console.log('Updated State', store.getState()) //after the call the state is subscribed
})
store.dispatch(buyCake()) // calls the action
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()