
import ReactDOM from 'react-dom/client';

import { useState } from "react"

export default function App() {
       
    // state for count
    const [isGoingOut, setIsGoingOut] = useState(true)
    console.log(isGoingOut)

    function handleClick() {
      setIsGoingOut(
        previsGoingOut => !previsGoingOut
      )
    }

    return (
        <main>
            <h1 >Do I feel like going out tonight?</h1>
            <button onClick={handleClick}>{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
);