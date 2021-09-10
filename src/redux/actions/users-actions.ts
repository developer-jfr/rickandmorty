import { userAPI } from "../../api/api";
import { FormType } from "../../components/UsersSearchForm";
import { UsersType } from "../../types/users-type";
import { InferActionsTypes, BaseThunkType } from "./../redux-store";

export const actions = {
  getUserAC: (users: Array<UsersType>) =>
    ({ type: "US/AC/GET_USERS", payload: { users } } as const),
  setIsFetchingAC: (iFetching: boolean) =>
    ({ type: "US/AC/SET_IS_FETCHING", payload: { iFetching } } as const),
  setSpecificUserAC: (user: UsersType) =>
    ({ type: "US/AC/SET_SPECIFIC_USER", payload: { user } } as const),
  setTotalItems: (count: number) => ({
    type: "US/AC/SET_TOTAL_ITEMS",
    payload: { count },
  } as const ),
  setCurrentPageAC: (currentPage: number) => ({
    type: 'US/AC/SET_CURRENT_PAGE', payload: {currentPage}
  } as const ),
  setFilterAC: (filter: FormType) => ({
    type: 'US/AC/SET_FILTER' , payload: {filter}
  } as const )
};

export const getUsersThunk =
  (currenPage: number, pageSize: number, search: FormType): ThunkType =>
  async (dispatch) => {
    dispatch(actions.setIsFetchingAC(true));
    let response = await userAPI.getUsers(
      currenPage,
      pageSize,
      search.name,
      search.status,
      search.gender
    );
    dispatch(actions.setCurrentPageAC(currenPage))
    dispatch(actions.setFilterAC(search))
    dispatch(actions.setIsFetchingAC(false));
    dispatch(actions.setTotalItems(response.info.count))
    dispatch(actions.getUserAC(response.results));
  };

export const getSpecificUserThunk =
  (id: number): ThunkType =>
  async (dispatch) => {
    let response = await userAPI.getSpecificUser(id);
    console.log(response);
    dispatch(actions.setSpecificUserAC(response));
  };

export type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;
