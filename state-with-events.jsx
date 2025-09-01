
import ReactDOM from 'react-dom/client';

import { useState } from "react"

export default function App() {
       
    // state for count
    const [count, setCount] = useState(0)
    console.log(count)

    // Calling setStateWeAreSaving will cause React to re-render
    // needs to be done by a handler

    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    function handlePlusClick() {
        setCount(prevCount => prevCount + 1)
    }
    


    function handlePlusClickNotBestPractice() {
      setCount(count + 1)
      //don't ever use ++ type in React as that would
      // directly try and update count (count++ == count = count + 1)
      // only SET via the setCount method
      // we are doing this as taking count as a const value, not
      // trying to assign it back to count ourselves
    }


    function handleMinusClick() {
        setCount(prevCount => prevCount - 1)
    }
    
    function handleMinusClickNotBestPractice() {
      setCount(count - 1)
    }
    
    return (
        <main>
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={handleMinusClick}>–</button>
                <h2 className="count">{count}</h2>
                <button onClick={handlePlusClick}>+</button>
            </div>
          </main>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
);