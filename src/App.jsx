import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeacherCards from './components/TeacherCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <TeacherCards/>
    </div>
      </>
  )
}

export default App
