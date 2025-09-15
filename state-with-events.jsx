
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
    
     /**
     * Challenge:
     * - Create a new component called `Count`
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the h2.count element below
     *      and display the incoming prop `number`
     * - Replace the h2.count below with an instance of
     *   the new Count component, passing the correct value
     *   to its `number` prop.
     * - After doing this, everything should be working the
     *   same as before.
     */

    
    console.log("App rendered")
    return (
        <main>
            <div className="counter">
                <button onClick={handleMinusClick}>–</button>
                
                {/* Pass the state of count to the component! */}
                <Count number={count} />
                
                <button onClick={handlePlusClick}>+</button>
            </div>
          </main>
    )
}


function Count(props) {
    console.log(`Count rendered with ${props.number}`)
    return (
        <h2 className="count">{props.number}</h2>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
);