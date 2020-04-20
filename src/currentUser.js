import { createSelector } from 'reselect'

const getCurrentUser = (state) => state.user


export const currentUser = createSelector(
    [getCurrentUser],
    (user)=>user
)