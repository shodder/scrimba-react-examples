import React from 'react';
import ReactDOM from 'react-dom/client';


/*
Some important notes on forms
lots of different types (text, email, radio)
name attribute very important as this is how you access the form after submission
To add a label to a input, the input needs an id attribute and the label usese the htmlFor to reference that id
htmlFor is the React way to add the HTML for attribute :)

Buttons
In a form a button is the same as using <input type="submit">
it is actually <button type="submit"> 
Outside of a form it is <button type="button" >

Submit
By default a form is a "GET" request - it adds the get query strin to the URL!
Without modding the `method` attribute to the form it will be a GET <form method="GET/POST/..."
It also does a full page refresh - to prevent refresh you need to force stop that by handling the submit and stopping the event
using onSubmit attribute

*/

function App() {
  
    //handle the form submission and stop the refresh

    function handleSubmit(event) {
        event.preventDefault() // stop the event to try to do the REST action/page refresh
        const formElement = event.currentTarget // this gets the entire form passed in via the event
        const formData = new FormData(formElement)  // this gets all the form data!
        // now I can accees form data by the names of the element
        console.log(`Email: ${formData.get("email")}`)
        console.log(`Password: ${formData.get("password")}`)
        formElement.reset() // force the form to reset! Clear the info

    }
  
    return (
    <section>
        <h1>Signup form</h1>
        <form onSubmit={handleSubmit} method="post">
            <label htmlFor="emailId">Email:</label>
            <input id="emailId" type="email" name="email" placeholder="person@email.com" />  
            <br />
            <label htmlFor="passwordId">Password:</label>
            <input id="passwordId" type="password" name="password" />  
            <br />

            <button>Submit</button>

        </form>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
);