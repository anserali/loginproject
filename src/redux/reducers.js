import {check_items} from '../components/cart_popover/cart_items_check' 

const initialvalue = {
    currentUser: null,
    items:[]
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

export const add_Items = (state = initialvalue,action) =>
{
    switch (action.type)
    {
        case 'Add_Items':
            return { ...state, items :check_items(action.payload,state.items) }
        default:
            return state
    }
}  