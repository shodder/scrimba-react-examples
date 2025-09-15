
import ReactDOM from 'react-dom/client';
import { useState } from "react"

import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

 

    function toggleFavorite() {
        console.log("Toggle Favorite")
        setContact(prevContactState => {
          // get the current state of the object (call is "prev" as it is really the previous state before being acted on by this function)
          // and return a brand new object by spreading the current one and updating only the fields you want to!
          // Looks odd but this works! The explicit "isFavorite" at the end will overwrite the field from the spread
          return {
            ...prevContactState,
            isFavorite: !prevContactState.isFavorite
          }
        })
    }

    // This is equivalent to toggleFavorite but written in full
    function toggleFavoriteFull() {
        console.log("Toggle Favorite")
        setContact(
          function updateFavourite(prevContactState) {
            return (
              {
                ...prevContactState,
                isFavorite: !prevContactState.isFavorite
              }
            )
          }
        )
    }

    
    
    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    {/* As this is a custom component HTML attributes such as onClick don't work as React
                    thinks all attributes are customer attributes so you need to pass events down and handle 
                    in the component */}
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}

/**
 * Challenge: Move the star image into its own component (Star)
 * - It should receive a prop called `isFilled` that it
 *   uses to determine which icon it will display. (You'll
 *   need to import the 2 star icons into that new component first).
 * - Import and render that component, passing the value of
 *   `isFavorite` to the new `isFilled` prop.
 * - Don't worry about the abiliity to flip this value quite yet.
 *   Instead, you can test if it's working by manually changing
 *   `isFavorite` in state above.
*/
function Star(props) {
    // set the star icon
    let starIcon = props.isFilled ? starFilled : starEmpty;

    return (
        <button
            // onClick={toggleFavoriteFull}
            // onClick={toggleFavorite}
            onClick={props.handleClick}
            aria-pressed={props.isFilled}
            aria-label={props.isFilled ?  "Remove from favourites" : "Add to favourites"}
            className="favorite-button"
        >
            <img
                src={starIcon}
                alt={props.isFilled ?  "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
);