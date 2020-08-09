import show from "../api/show";
import {useState, useEffect} from "react";

export const useShows=()=> {
    const [stateShows,setStateShows] = useState(null);
    
    useEffect(()=>{
        show.get("/shows")
            .then(response=>{
                setStateShows(response.data)
            })
    },[]);

    return {shows:stateShows};
}