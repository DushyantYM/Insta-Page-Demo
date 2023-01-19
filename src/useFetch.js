import React,{useState,useEffect} from "react";
import axios from "axios";

const useFetch =(url) => {

    const [data,setData] = useState();

     useEffect( () => {

        const asyncFunc = async () => {

            const apiData = await axios.get(url);
            // console.log(apiData.data);
            setData(apiData.data)
        }

       asyncFunc();

     },[]);
    
     return [data];
    
}
export default useFetch;