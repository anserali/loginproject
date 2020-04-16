const initialvalue = {
    currentUser: null,
    one: "hai"
}

function userReducer(state = initialvalue, action)
{
    switch (action.type)
    {
        case 'ADD_USER':
            return { ...state, currentUser: action.payload }
        default:
            return state
    }
}

export default userReducer