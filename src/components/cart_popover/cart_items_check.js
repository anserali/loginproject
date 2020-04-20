export const check_items = (newItem,itemArray) =>
{
    const found = itemArray.find(
        function (item)
        {
            return item.id === newItem.id
        }
    )

    if (found)
    {
       let array= itemArray.map(
            item =>
            {
                if (item.id === newItem.id)
                {
                    return {...item,quantity:item.quantity+1}
                } else
                {
                    return item
                }
            }  
       )
        
        return array
    }

    return ([...itemArray,{...newItem,quantity:1}])
}