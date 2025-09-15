import ReactDOM from 'react-dom/client';

import Joke from "./conditional-render-joke"
import jokesData from "./conditional-render-data"

export default function App() {
    const jokeElements = jokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
);
