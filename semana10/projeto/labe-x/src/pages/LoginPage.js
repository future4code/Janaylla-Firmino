import React from "react";
import {Bory} from '../config/styles'
import { useHistory } from "react-router-dom";
import { goToAdminHome } from "../constants/routs";

const LoginPage = () => {
  const history = useHistory();

  return <Bory>
    <button  onClick={() => goToAdminHome(history)}>Logar??</button>
  </Bory>;
};

export default LoginPage;
