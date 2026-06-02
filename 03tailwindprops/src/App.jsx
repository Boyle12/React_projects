import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    name: "Kaushal",
    age: 21,
     city: "Sasaram",
     state: "Bihar",
     country: "India"
  }
}

let newArr = [1,2,3,4,5,6,7,8,9]

  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
    <Card username="Hitesh" myArr={newArr}/>
    <Card username='Abhinav'post="software engg."/>
    <Card />

    </>
  )


export default App
