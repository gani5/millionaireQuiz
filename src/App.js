import React from 'react';
import './App.css'
import {useState} from 'react'
import { Trivia } from './Trivia';
import { useEffect } from 'react';
import { Timer } from './Timer';
import {Start} from './Start'

function App() {
  const [queNo,setQueNo]=useState(1);
  const [stop, setStop]=useState(false)
  const [earned, setEarned]=useState("$ 0")
  const [userName, setUserName]=useState(null)
  

  const data=[{
    id: 1,
       question: " Javascript is an _______ language?",
       answers: [
        { text: "Object Orieneted", correct: false },
        { text: "Object Based", correct: true },
        { text: "Procedural", correct: false },
        { text: "None of the above", correct: false },
      ]},
      {
        id: 2,
           question: "Which of the following keywords is used to define a variable in Javascript?",
           answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "Both var & let", correct: true },
            { text: "none of the above", correct: false },
          ]},
          {
            id: 3,
               question: "Which of the following methods is used to access HTML elements using Javascript?",
               answers: [
                { text: "getElementById", correct: false },
                { text: "getElementsByClassName", correct: false },
                { text: "getElementsByTagName", correct: false },
                { text: "All of the above", correct: true },
              ]},
              {
                id: 4,
                   question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
                   answers: [
                    { text: "Throws an error", correct: false },
                    { text: "Ignore the statements", correct: true },
                    { text: "Gives warning", correct: false },
                    { text: "None of the above", correct: false },
                  ]},
                  {
                    id: 5,
                       question: "Which of the following methods can be used to display data in some form using Javascript?",
                       answers: [
                        { text: "document.write()", correct: false },
                        { text: "console.log()", correct: false },
                        { text: "window.alert()", correct: false },
                        { text: "All of the above", correct: true },
                      ]},
                      {
                        id: 6,
                           question: "How can a datatype be declared to be a constant type?",
                           answers: [
                            { text: "const", correct: true },
                            { text: "var", correct: false },
                            { text: "let", correct: false },
                            { text: "None of the above", correct: false },
                          ]},

                          {
                            id: 7,
                               question: "What keyword is used to check whether a given property is valid or not?",
                               answers: [
                                { text: "in", correct: true },
                                { text: "is in", correct: false },
                                { text: "exists", correct: false },
                                { text: "lies", correct: false },
                              ]},
                              {
                                id: 8,
                                   question: "What is the use of the <noscript> tag in Javascript?",
                                   
                                   answers: [
                                    { text: "The content are displayed by non-Js browsers", correct: true },
                                    { text: "Clear all the cookies", correct: false },
                                    { text: "Both A and B", correct: false },
                                    { text: "None of the above", correct: false },
                                  ]},
                                  {
                                    id: 9,
                                       question: "output of print(typeof(NaN));",
                                       answers: [
                                        { text: "Object", correct: false },
                                        { text: "Number", correct: true },
                                        { text: "String", correct: false },
                                        { text: "None of the above", correct: false },
                                      ]},
                                      {
                                        id: 10,
                                           question: "Which function is used to serialize an object into a JSON string in Javascript?",
                                           answers: [
                                            { text: "stringify()", correct: false },
                                            { text: "parse()", correct: false },
                                            { text: "convert()", correct: false },
                                            { text: "None of the above", correct: false },
                                          ]},


  ]

  const moneyPyramid=[
    {id:1,amount:'$100'},
    {id:2,amount:'$200'},
    {id:3,amount:'$400'},
    {id:4,amount:'$800'},
    {id:5,amount:'$1600'},
    {id:6,amount:'$3200'},
    {id:7,amount:'$6400'},
    {id:8,amount:'$2500'},
    {id:9,amount:'$10000'},
    {id:10,amount:'$50000'},
    {id:11,amount:'$725000'},
    {id:12,amount:'$2500000'},
    {id:13,amount:'$500000'},
    {id:14,amount:'$1000000'},
    {id:15,amount:'$100000000'}
  ].reverse();
  useEffect(()=>{
    if(queNo>1)
    {
      moneyPyramid.find((m)=>{
        if(m.id===queNo-1)
        {
          setEarned(m.amount)
        }
      })
    }
  },[moneyPyramid,queNo])
  return (
    <div className="App">
      {userName?(<>
        <div className='main'>
        {stop?(<h1 className='endText'>{userName} earned:{earned}</h1>) :(<>
           <div className='top'>
           <div className='timer'><Timer setStop={setStop} queNo={queNo} /></div>
           </div>
           <div className='bottom'><Trivia data={data} queNo={queNo} setQueNo={setQueNo} setStop={setStop}/></div>
        </>
        )}
        

      </div>
      <div className='pyramid'>
        <ul className='moneyList'>
          
            {
              moneyPyramid.map((m)=>{
                return(
                  <>
                    <li className={queNo===m.id ? 'moneyListItem active': 'moneyListItem'}>
                      <span className='moneyListItemNumber'>{m.id}</span>
                      <span className='moneyListItemAmount'>{m.amount}</span>
                    </li>
                  </>
                  
                )
              })
            }
        </ul>
      </div>
      </>):<Start userName={userName} setUserName={setUserName} />}
      
    </div>
  );
}

export default App;
