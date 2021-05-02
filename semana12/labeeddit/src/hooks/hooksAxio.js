import React, { useState } from "react";
import {baseUrl} from '../constants/urls'
import axios from 'axios'

export const usePost = (endUrl) => {
 
const [data, setData] = useState();
const [sucess, setSucess] = useState(0);
const [loading, setLoading] = useState(false)

const postData = (bory, headers) => {
    setLoading(true)
    setSucess(0)
     axios.post(`${baseUrl}${endUrl}`, bory, {
          headers: headers
     })
      .then((res) => {
          setData(res.data)
          setSucess(1)
          setLoading(false)
      }).catch((err) => {
          setSucess(-1)  
           setLoading(false)
     })
    
}
return [data, postData, loading, sucess];
}

export const useGet = (valueInitial) => {
 
     const [data, setData] = useState(valueInitial);
     const [loading, setLoading] = useState(false)
     const getData = (token, keyObj, endUrl) => {
          setLoading(true)
           axios.get(`${baseUrl}${endUrl}`, {
               headers:{
                    Authorization: token
               }
               })
            .then((res) => {
                 setData(res.data[keyObj])
               setLoading(false)
            }).catch((err) => {
               setLoading(false)
           })
         
     }
     return [data, getData, loading, setData];
     }
     
 export const usePut = () => {
          const [loading, setLoading] = useState(false)
          const [sucess, setSucess] = useState(0)
          const putData = (headers, bory, endUrl) => {
         
               setLoading(true)
               setSucess(0)
                axios.put(`${baseUrl}${endUrl}`, bory, {
                    headers: headers
                    })
                 .then((res) => {
                    setLoading(false)
                    setSucess(1)
                 }).catch((err) => {
                   setLoading(false)
                   setSucess(-1)
                })
              
          }

          return [putData, loading, sucess];
          }
          
          