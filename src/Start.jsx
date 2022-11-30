import { useRef } from "react"
export function Start({userName,setUserName}){
    const inputRef=useRef()
    const handleClick=()=>{
        setUserName(inputRef.current.value)
    }
    return(
        <div className="start">
            <input type='text' placeholder="Enter User Name" className="startInput" ref={inputRef}/>
            <button className="startBtn" onClick={handleClick}>Start</button>
        </div>
    )
}