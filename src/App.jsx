import { useState } from 'react'

import './App.css'
import OurAppTitle from './components/OurAppTitle';
import Button from './components/Button';

function App() {

  const[counter1,setCounter1]=useState(0);
  const[counter2,setCounter2]=useState(0);
  const handleCounter1=()=>{
    setCounter1(counter1+1);
  }
  const handleCounter2=()=>{
    setCounter2(counter2+2)
  }
  return (
    <>
      <OurAppTitle/>
      <hr />
      <h1>Our simple app</h1>
      <hr />
      <div className="counter-app-1">
        <p>Value of the counter 1 is: {counter1}</p>
        <Button clickHandler={handleCounter1}/>
      </div>

      <div className="counter-app-2">
        <p>Value of the counter 2 is: {counter2}</p>
        <Button clickHandler={handleCounter2}/>
      </div>
    </>
  )
}

export default App
