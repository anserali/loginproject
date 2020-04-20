import { createSelector } from 'reselect'


const getItems = (state) => state.add_Items

const getItem = createSelector(
    [getItems],
    (items) => items.items
)

const getQuantityCount = createSelector(
    [getItems],
    (items) =>
    {
        let quantity = 0;
        items.items.map(item =>
        {
            quantity = quantity + item.quantity
        })

        return quantity
    }
)

export const selectItem = createSelector(
    [getItem],
    (item)=>item
)

export const QuantityCount = createSelector(
    [getQuantityCount],
    (count) => count
)