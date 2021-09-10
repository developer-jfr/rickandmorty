import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSpecificUserThunk,
  getUsersThunk,
} from "../redux/actions/users-actions";
import {
  countUsersSelect,
  getCurrentPageSelect,
  getFilterSelect,
  getUsersSelect,
  pageSizeSelect,
  toggleIsFetching,
} from "../redux/selectors/users-selector";
import Paginator from "./common/Paginator/Paginator";
import Preloader from "./common/Preloader/Preloader";
import "./Users.css";
import UsersDetails from "./UsersDetails";
import UsersSearchForm, { FormType } from "./UsersSearchForm";
function Users() {
  const [showPopup, setPopUp] = useState<boolean>(false);
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelect);
  const isFetching = useSelector(toggleIsFetching);
  const filter = useSelector(getFilterSelect);
  const count = useSelector(countUsersSelect);
  const currentPage = useSelector(getCurrentPageSelect);
  const pageSize = useSelector(pageSizeSelect);

  useEffect(() => {
    dispatch(getUsersThunk(currentPage, pageSize, filter));
  }, []);

  const getSpecificFC = (id: number) => {
    dispatch(getSpecificUserThunk(id));
    setPopUp(true);
  };

  const onFilterChanged = (filter: FormType) => {
    dispatch(getUsersThunk(1, pageSize, filter));
  };

  const onPageChanged = (pageNumber: number) => {
    dispatch(getUsersThunk(pageNumber, pageSize, filter));
  };

  return (
    <>
      <div className={`main ${showPopup ? "hidden" : ""}`}>
        <section
          className="character-section sec-padding active "
          id="character"
        >
          <div className="container">
            <div className="main-row">
              <div className="section-title">
                <h3>
                  Rick and <span>Morti</span>
                </h3>
              </div>
              <div>
                <UsersSearchForm onFilterChanged={onFilterChanged} />
              </div>
            </div>
            <div className="row">
              {isFetching ? (
                <Preloader />
              ) : (
                users.map((user) => {
                  return (
                    <div className="character-item" key={user.id}>
                      <div className="character-item-thumbnail">
                        <img src={user.image} alt="character-item-thumbnail" />
                      </div>
                      <h3 className="character-item-title">{user.name}</h3>
                      <button
                        onClick={() => getSpecificFC(user.id)}
                        type="button"
                        className="btn view-project-btn"
                      >
                        view character
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={count}
            pageSize={pageSize}
          />
        </section>
      </div>
      {showPopup ? <UsersDetails setPopUp={setPopUp} open={showPopup} /> : ""}
    </>
  );
}

export default Users;
