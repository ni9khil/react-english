import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={updateColor}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' name="red"
          style={{backgroundColor: 'red'}}
          >Red</button>
          <button
          onClick={updateColor}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' name="green"
          style={{backgroundColor: 'green'}}
          >Green</button>
          
          </div>
      </div>
    </div>
  )

  function updateColor(e){
    setColor(e.target.name);
  }
}

export default App
