const redux = require('redux')
const thunk = require('redux-thunk').defalut 
const axios = require('axios')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FALIURE = 'FETCH_USERS_FALIURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFaliure = (error) => {
    return {
        type: FETCH_USERS_FALIURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users:action.payload,
                error :''
            }
        case FETCH_USERS_FALIURE:
            return {
                loading: false,
                users:[],
                error :action.payload
            }
    }
}

const fetchUsers =()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data.map(user=>user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error =>{
            dispatch(fetchUsersFaliure(error.message))
        })
    }
}

const store = createStore(reducer,applyMiddleware(thunk))
store.subscribe(() =>{
    console.log(store.getState())
})
store.dispatch(fetchUsers())