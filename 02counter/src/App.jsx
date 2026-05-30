import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  // counter is variable and set conter is method or function 
  //let counter = 15
  const addValue = ()=>{
    //setCounter (counter + 1) 
    // when interviewer ask make a counter and add multiple no. at a time then the code is given in comment
    setCounter((prevCounter)=>prevCounter + 1)
    setCounter((prevCounter)=>prevCounter + 1)
    setCounter((prevCounter)=>prevCounter + 1)
    setCounter((prevCounter)=>prevCounter + 1)
    setCounter((prevCounter)=>prevCounter + 1)
  }
  const removeValue = ()=>{
    //setCounter(counter - 1)
    // when interviewer ask make a counter and subtract multiple no. at a time then the code is given in comment
    setCounter((prevCounter)=>prevCounter - 1)
    setCounter((prevCounter)=>prevCounter - 1)
    setCounter((prevCounter)=>prevCounter - 1)
    setCounter((prevCounter)=>prevCounter - 1)
    setCounter((prevCounter)=>prevCounter - 1)
  }
  return (
    <>
    <h1>React course with Hitesh sir {counter}</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}
    >Add value</button> {" "}
    <button onClick={removeValue}>Remove value</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App

