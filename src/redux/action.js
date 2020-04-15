

function userAction(data)
{
    return {
        type: 'ADD_USER',
        payload: data
    }
}

export default userAction