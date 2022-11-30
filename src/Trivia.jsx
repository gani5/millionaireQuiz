import { useEffect } from "react"
import { useState } from "react"





export function Trivia({data,queNo,setQueNo,setStop}){
    const [question,setQuestion]=useState(null)
    const [selectedAnswer,setSelectedAnswer]=useState(null)
    const [className,setClassName]=useState("answer")
    
    
    useEffect(()=>{
        setQuestion(data[queNo-1])
       
    },[data,queNo])
    const handleClick=(a)=>{
        setSelectedAnswer(a)
        setClassName("answer active")
        setTimeout(() => {
            setClassName(a.correct ? "answer correct" : "answer wrong")
        }, 3000);
        setTimeout(() => {
            if(a.correct)
            {   
                setQueNo((prev)=>prev+1)
                setSelectedAnswer(null)
            }else{
                
                setStop(true)
            }
        }, 6000);
    }

    return(
        <div className="trivia">
            <div className="question" >{question?.question}</div>
                <div className="answers" >
                    {
                        question?.answers.map((a)=>{
                            return(
                                <div  className={selectedAnswer===a ? className : "answer"} onClick={()=>handleClick(a)}>{a.text}</div>
                            )
                        
                        })
                    }          
                </div>    
        </div>
    )
}