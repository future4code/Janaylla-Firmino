import React from "react";
import {NavA} from '../config/styles'
import { useHistory } from "react-router-dom";
import { goToAdminHome, goToTripDetails, goToCreateTrip, goToHome} from "../constants/routs";

const NavAdm = (props) => {
  const history = useHistory();
  const logOut = () =>{
     window.localStorage.removeItem('token');
     goToHome(history);
  }
  const menu =
    [ 
        {
          function: goToHome,
          text: "Página Cliente",
          page: ""
        },
        {
          function: goToAdminHome,
          text: "Home",
          page: "AdminHome"
        },
        {
        function: goToCreateTrip,
        text: "Adicionar Viagem",
        page: "CreateTrip"
        },
        {
            function: logOut,
            text: "Logout",
            page: "Home"
        },

    ]
  return(
    <NavA>
      <ul>
        {menu.map((item) => {
            if(item.page === props.currentPage)
                return <li  id="currentPage" onClick={() => item.function(history)}>{item.text}</li>
            else
            return <li onClick={() => item.function(history)}>{item.text}</li>
        })}
      </ul>
    </NavA>
    )
};

export default NavAdm;
