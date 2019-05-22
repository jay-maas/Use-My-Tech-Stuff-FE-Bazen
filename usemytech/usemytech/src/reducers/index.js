import { 
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    ADD_ITEM_START, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE,
    FETCH_ITEM_START, FETCH_ITEM_SUCCESS, FETCH_ITEM_FAILURE,
   
} from '../actions'

const initialState = {
    loggingIn: false,
    isSignedUp: false, 
    error: '',
    token: localStorage.getItem('token'),
    addingItem: false,
    fetchingItems: false,
    owner: null,
    items: []
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case LOGIN_START:
        return {
            ...state,
            loggingIn: true,
            error: null
        }
        case LOGIN_SUCCESS:
        return {
            ...state,
            loggingIn: false,
            token: action.payload.token,
            owner: action.payload.id
        }
        case LOGIN_FAILURE:
        return {
            ...state,
            loggingIn: false,
            error: action.payload 
        }
        case SIGNUP_START:
        return{
            ...state,
            isSignedUp: true,
        }
        case SIGNUP_SUCCESS:
        return {
            ...state,
            isSignedUp: false
        }
        case SIGNUP_FAILURE:
        return {
            ...state,
            isSignedUp: false,
            error: action.payload 
        }
        case ADD_ITEM_START:
        return {
            ...state,
            addingItem: true,
            error: null
        }
        case ADD_ITEM_SUCCESS:
        return {
            ...state,
            addingItem: false,
            error: null
        }
        case ADD_ITEM_FAILURE:
        return {
            ...state,
            addingItem: false,
            error: action.payload 
        }
        case FETCH_ITEM_START:
        return {
            ...state,
            fetchingItems: true,
        }
        case FETCH_ITEM_SUCCESS:
        return {
            ...state,
            fetchingItems: false,
            items: action.payload 
        }
        case FETCH_ITEM_FAILURE:
        return {
            ...state,
            fetchingItems: false,
            error: action.payload 
        }
        default: 
        return state;
    }
}

export default reducer;