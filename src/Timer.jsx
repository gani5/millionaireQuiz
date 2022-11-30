import { useEffect } from "react"
import { useState } from "react"
export function Timer({setStop,queNo}){
    const [timer, setTimer]=useState(30)
    
    useEffect(()=>{
            if(timer!==0){
                const interval= setInterval(() => {
                    setTimer((prev)=>prev-1)
                }, 1000);
                return ()=>clearInterval(interval)
            }
            else
            {
                setStop(true)
            }
        
        
        
    },[setStop,timer]);

    useEffect(()=>{
        
        setTimer(30)
    },[queNo])

    return timer;
}