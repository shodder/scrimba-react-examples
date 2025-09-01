
import ReactDOM from 'react-dom/client';

import { useState } from "react"

export default function App() {
       
  // state to hold an array
  const [myFavoriteThings, setMyFavoriteThings] = useState([])
  
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]

  // display the favourite things!
  const thingsElements = myFavoriteThings.map(
    thing => <p key={thing}>{thing}</p>
  )

  function addFavoriteThing() {
    // Use a callback because we care about previous state
    // NEVER update anything directly that is managed by state
    // With arrays, you need to:
    // Access the previous array: prevFavThings in the callback
    // Create a new array from the previous array and then add the
    // new item.
    // then myFavourite things is updated to be the new array!!
    // never do stateArray.push(NEW THING)
    setMyFavoriteThings(
      prevFavThings => [
        ...prevFavThings, 
        allFavoriteThings[prevFavThings.length] // get the next item by index
      ] 
      // the same as
      // function addNewThing(prevFavThings) {
      //   return [...prevFavThings, allFavoriteThings[prevFavThings.length]] 
      // }
    )

  }

    return (
        <main>
          <button onClick={addFavoriteThing}>Add item</button>
          <section aria-live="polite">
            {thingsElements}
          </section>
        </main>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
);