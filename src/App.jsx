import { useState } from 'react'
import './App.css'
import './tailwind.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-red-400">Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
