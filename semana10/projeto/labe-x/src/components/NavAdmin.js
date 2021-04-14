import React from "react";
import {Nav} from '../config/styles'
import { useHistory } from "react-router-dom";
import { goToAdminHome, goToTripDetails, goToCreateTrip, goToHome} from "../constants/routs";

const NavAdm = (props) => {
  const history = useHistory();
    
  const menu =
    [ 
        {
          function: goToAdminHome,
          text: "Home",
          page: "AdminHome"
        },
        {
        function: goToTripDetails,
        text: "Viagem",
        page: "TripDetails"
        },
        {
        function: goToCreateTrip,
        text: "Adicionar Viagem",
        page: "CreateTrip"
        },
        {
            function: goToHome,
            text: "Logout",
            page: "Home"
        }
    ]
  return(
    <Nav>
      <ul>
        {menu.map((item) => {
            if(item.page === props.currentPage)
                return <li  id="currentPage" onClick={() => item.function(history)}>{item.text}</li>
            else
            return <li onClick={() => item.function(history)}>{item.text}</li>
        })}
      </ul>
    </Nav>
    )
};

export default NavAdm;
