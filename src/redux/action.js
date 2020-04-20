

function userAction(data)
{
    return {
        type: 'ADD_USER',
        payload: data
    }
}

export default userAction
export const addItems=(data)=>
{
    return {
        type: 'Add_Items',
        payload:data
    }
}