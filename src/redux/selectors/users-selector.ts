import { AppStateType } from "../redux-store";

export const getUsersSelect = (state: AppStateType) => {
    return state.users.users
}

export const toggleIsFetching = (state: AppStateType) => {
    return state.users.isFetching

}

export const getSpecificUserSelect = (state: AppStateType) => {
    return state.users.user
}


export const getFilterSelect = (state: AppStateType) => {
    return state.users.filter
}


export const getCurrentPageSelect = (state: AppStateType) => {
    return state.users.currentPage
}

export const pageSizeSelect = (state: AppStateType) => {
    return  state.users.pageSize
}


export const countUsersSelect = (state: AppStateType) => {
    return state.users.count
}