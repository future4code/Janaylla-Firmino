import React, {useState} from "react";
import {Nav} from '../config/styles'
import { useHistory } from "react-router-dom";
import { goToHome, goToListTrip, goToApplicationForm} from "../constants/routs";

const NavUsuario = (props) => {
  const history = useHistory();
    
  const [mostraMenu, setMostraMenu] = useState(false);
  const menu =
    [ 
        {
          function: goToHome,
          text: "Home",
          page: "Home"
        },
        {
        function: goToListTrip,
        text: "Viagens",
        page: "ListTrips"
        },
        {
        function: goToApplicationForm,
        text: "Candidatar-se",
        page: "ApplicationForm"
        }
    ]
  return(
    <Nav>
     <span class="material-icons" onClick={() => setMostraMenu(!mostraMenu)}>
      view_headline
      </span>
      { mostraMenu && <>
      <ul id="mobile">
        {menu.map((item) => {
            if(item.page === props.currentPage)
                return <li id="currentPage" onClick={() => item.function(history)}>{item.text}</li>
            else
            return <li onClick={() => item.function(history)}>{item.text}</li>
        })}
      </ul>
      </>
      }
       <ul id="desktop">
        {menu.map((item) => {
            if(item.page === props.currentPage)
                return <li id="currentPage" onClick={() => item.function(history)}>{item.text}</li>
            else
            return <li onClick={() => item.function(history)}>{item.text}</li>
        })}
      </ul>
    </Nav>
    )
};

export default NavUsuario;
