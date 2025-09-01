
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
          //get the current state of the object (call is "prev" as it is really the previous state before being acted on by this function)
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

    // set the star icon
    let starIcon = contact.isFavorite ? starFilled : starEmpty;
    
    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavoriteFull}
                        // onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ?  "Remove from favourites" : "Add to favourites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ?  "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button>
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

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
);