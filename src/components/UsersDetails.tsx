import React, {Dispatch, FC, SetStateAction} from "react";
import {useSelector} from 'react-redux'
import './Users.css'
import { getSpecificUserSelect } from "../redux/selectors/users-selector";

type PropsType = {
  open: boolean
  
  setPopUp: Dispatch<SetStateAction<boolean>>
}

const UsersDetails:FC<PropsType> = ({open, setPopUp}) => {
  const user = useSelector(getSpecificUserSelect);
  console.log(user)
  return (
    <div className={`character-popup ${(open ? "open" : "pp-close")}`} >
      <div className="pp-inner">
    
          <div className="pp-content " key={user?.id}>
          <div className="pp-header">
            <button type="button" className="btn pp-close" onClick={() => setPopUp(false)} >
              <i className="fas fa-times" ></i>
            </button>
            <div className="pp-thumbnail">
              <img src={user?.image} alt="" />
            </div>
            <h3>{user?.name} </h3>
          </div>
          <div className="pp-body">
            <div className="description">
              <p>
                {user?.species}
              </p>
            </div>
            <div className="general-info">
              <ul>
                <li>
                  Gender - <span>{user?.gender}</span>
                </li>
                <li>
                  Type - <span>{user?.type || 'no'} </span>
                </li>
                <li>
                  Created - <span>{user?.created} </span>
                </li>
                <li>
                  Location -
                  <span>
                    {user?.location?.name}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default UsersDetails;
