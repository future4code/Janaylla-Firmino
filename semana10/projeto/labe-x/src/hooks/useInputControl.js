import {useState} from "react";

export function useInputControl(valueStart){
    const [data, setData] = useState(valueStart);
    const setChangeData = (e) =>{
        setData(e.target.value)
    }
    return [data , setChangeData]
};
