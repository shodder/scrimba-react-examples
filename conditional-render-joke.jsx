import { useState } from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = useState(false)
    
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    // Best practice is to not use && in the React world due to behaviour.
    // Always use ternary operator

    // Can also use logic outside of the HTML
    const btnTxt = isShown ? "Hide" : "Show"

    return (
        <div>
            {props.setup ? <h3>{props.setup}</h3> : null}
            {isShown ? <p>{props.punchline}</p> : null}
            <button onClick={toggleShown}>{ btnTxt } punchline</button>
            <hr />
        </div>
    )
}