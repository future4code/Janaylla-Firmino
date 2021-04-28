import React, { useState } from "react";
import {baseUrl} from '../constants/urls'
import axios from 'axios'

export const usePost = (endUrl) => {
 
const [data, setData] = useState();
const [sucess, setSucess] = useState(false);
const [loading, setLoading] = useState(false)

const postData = (bory, headers) => {
    setLoading(true)
    setSucess(false)
     axios.post(`${baseUrl}${endUrl}`, bory, {
          headers: headers
     })
      .then((res) => {
          setData(res.data)
          setLoading(false)
          console.log("Resp", res)
          setSucess(true)
      }).catch((err) => {
        console.log("Erro", err)
       setLoading(false)
       setSucess(false)
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
              console.log("Erro", err)
           setLoading(false)
           })
         
     }
     return [data, getData, loading, setData];
     }
     
 export const usePut = () => {
          const [loading, setLoading] = useState(false)
          const [sucess, setSucess] = useState(false)
          const putData = (headers, bory, endUrl) => {
               
    console.log(bory, baseUrl+endUrl);
               setLoading(true)
               setSucess(false)
                axios.put(`${baseUrl}${endUrl}`, bory, {
                    headers: headers
                    })
                 .then((res) => {
                    setLoading(false)
                    setSucess(true)
                    console.log(res)
                 }).catch((err) => {
                   console.log("Erro", err)
                   setLoading(false)
                   setSucess(false)
                })
              
          }

          return [putData, loading, sucess];
          }
          
          