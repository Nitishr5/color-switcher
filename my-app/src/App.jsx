import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState()

  const btnClick=()=>{
    return(
      // console.log(event.target.value)
      setColor(event.target.value)
   
      
    )
  }
  console.log(color);
  return (
    <>

   <div className=' w-full h-screen duration-200'
   style={{backgroundColor:color}}
   >
    <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

   
    <input className='outline-none px-4 py-1 rounded-full text-white shadow-lg' id='box' type="submit" value="Red"  onClick={btnClick} 
    style={{backgroundColor:'red'}}/>

    {/* -------------------------- 2nd way to change color click on yellow button --------------------------------*/}
   
    <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'  onClick={()=>setColor("yellow")}
    style={{backgroundColor:'yellow'}}
    >Yellow</button>

    <input className='outline-none px-4 py-1 rounded-full text-white shadow-lg' id='box' type="submit" value="Black" onClick={btnClick}
    style={{backgroundColor:'black'}}/>

    <input className='outline-none px-4 py-1 rounded-full text-white shadow-lg' id='box' type="submit" value="green" onClick={btnClick}
    style={{backgroundColor:'green'}}/>

<button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  onClick={()=>setColor("Violet")}
    style={{backgroundColor:'Violet'}}
    >Violet</button>
   </div>
   </div>
    </>
  )
}

export default App

