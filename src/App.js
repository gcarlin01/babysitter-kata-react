import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
 
function App() {
  const [startTime, setStartTime] = useState('')
  const [startError, setStartError] = useState(false)

  useEffect(() => {
    if(startTime === "4") {
      setStartError(true)
    }
    else {
      setStartError(false)
    }
  }, [startTime])

  return (
  <div>
    <input aria-label="start-input" value={startTime} onChange={(event) => setStartTime(event.target.value)}/>
    {startError && <h1>Cannot start before 5</h1>}
  </div>
  )
}

export default App;
