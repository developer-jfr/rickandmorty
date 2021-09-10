import { UsersType } from "./../../types/users-type";
import {  ActionsType } from "../actions/users-actions";

const initialState = {
  users: [] as Array<UsersType>,
  isFetching: true,
  user: {} as UsersType,
  currentPage: 1,
  count: 0,
  filter: {
    name: "",
    status: "",
    gender: "",
  },
  pageSize: 10
};

export const usersReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "US/AC/GET_USERS": {
      return {
        ...state,
        users: action.payload.users,
      };
    }
    case "US/AC/SET_IS_FETCHING": {
      return {
        ...state,
        isFetching: action.payload.iFetching,
      };
    }
    case "US/AC/SET_SPECIFIC_USER": {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    case "US/AC/SET_TOTAL_ITEMS": {
      return {
        ...state,
        count: action.payload.count,
      };
    }
    case 'US/AC/SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: action.payload.currentPage
      }
    }
    case 'US/AC/SET_FILTER': {
      return {
        ...state,
        filter: action.payload.filter
      }
    }
    default:
      return state;
  }
};

type InitialStateType = typeof initialState;
export type FilterType = typeof initialState.filter;
