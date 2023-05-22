import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import Header from './components/Header'
import SignUpSecond from './components/SignUpSecond'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header title={"Alice"}/>
      <SignUpSecond />

    </div>

  )
}

export default App
