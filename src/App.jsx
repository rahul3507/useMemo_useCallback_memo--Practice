import { useCallback, useMemo, useState } from 'react'

import './App.css'
import OurAppTitle from './components/OurAppTitle';
import Button from './components/Button';
import Title from './components/Title';

function App() {

  const[counter1,setCounter1]=useState(0);
  const[counter2,setCounter2]=useState(0);
  const handleCounter1=useCallback(()=>{
    setCounter1((prev)=>prev+1);
  },[]);
  const handleCounter2=useCallback(()=>{
    setCounter2((prev)=>prev+5)
  },[])

  const isEven =useMemo(()=>{
    let i=0;
    while(i<1000000) i++;
    return counter1 %2 ===0 ? 'Counter is Even' :'Counter is Odd'
  })
  return (
    <>
      <OurAppTitle/>
      <hr />
      <h1>Our simple app</h1>
      <hr />
      <div className="counter-app-1">
        <Title counter={counter1}/>
        <p>{isEven}</p>
        <Button clickHandler={handleCounter1}/>
      </div>

      <div className="counter-app-2">
      <Title counter={counter2}/>
        <Button clickHandler={handleCounter2}/>
      </div>
    </>
  )
}

export default App
