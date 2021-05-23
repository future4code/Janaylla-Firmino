import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";

export const useRequestData = (path, keyObject, initialState) => {

  const [data, setData] = useState(initialState);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const getData = () => {
    setMessage('')
    setLoading(true)
    setError(false)
      axios
        .get(`${BASE_URL}${path}`)
        .then((response) => {
          setData(response.data[keyObject]);
          setMessage("")
          setLoading(false)
          setError(false)
          console.log(response)
        })
        .catch((err) =>{
          setMessage(err.message)
          setLoading(true)
          setError(true)
          console.log(err)
        });
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, getData, message, error, loading];
};