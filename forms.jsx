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

    // old style using onSubmit in the form rather than using action
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

    // Proper way to do form submission
    // use action={} in the form and then spec the function
    // Using this method, React handles passing in the form data, stopping the default
    // form submission event and reseting the form at the end - all for "free"
    function signUp(formData) {
        const email = formData.get("email")
        const password = formData.get("password")
        const description = formData.get("description")
        const employmentStatus = formData.get("employmentStatus")
        const dietaryRestrictions = formData.getAll("dietaryRestrictions")  // only one that needs a getAll
        const favColour = formData.get("favColour")

        console.log(email)
        console.log(password)
        console.log(description)
        console.log(employmentStatus)
        console.log(dietaryRestrictions)
        console.log(favColour)

        // If you want to grab all the form entries at once!
        const allEntriesNotQuite = Object.fromEntries(formData)
        console.log(allEntriesNotQuite)

        // problem with the above is to do with the checked items which have multiple items
        // you always have to deal with that seperately so...
        let mostEntries = Object.fromEntries(formData)
        const dietRestrict = formData.getAll("dietaryRestrictions")  // only one that needs a getAll
        const allEntries = {
            ...mostEntries,
            dietaryRestrictions: dietRestrict,
        }

        console.log(allEntries)

    }

    return (
    <section>
        <h1>Signup form</h1>
        {/* <form onSubmit={handleSubmit} method="post"> OLD WAY*/}
        <form action={signUp} method="post"> OLD WAY
            <label htmlFor="emailId">Email:</label>
            <input 
                id="emailId" 
                type="email" 
                name="email" 
                defaultValue="person@email.com" />  {/* Use default value just so you don't have to keep tying during test" */}
            <br />
            <label htmlFor="passwordId">Password:</label>
            <input id="passwordId" type="password" name="password" defaultValue="123" />  
            <br />

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" defaultValue="Description yo!"></textarea> 

            {/* Radio Buttons 
                Give radio buttons the same name so only 1 is clickable (of the same name) *
                default=true to set it by default! Can only have 1 in radio
                Value sets the actual value set in the form data. YOU HAVE TO SET THIS TO GET A VALUE! 
                Easy to get in code as formData.get("employmentStatus") can only have a single value
            */}
            <fieldset className="field-set-radio">
                <legend>Employement Status</legend>
                <label>
                    <input type="radio" name="employmentStatus" value="student"/> 
                    Student
                </label>
                <label>
                    <input type="radio" name="employmentStatus" value="part-time"/>
                    Part-time
                </label>
                <label>
                    <input type="radio" name="employmentStatus" value="full-time" defaultChecked={true}/> 
                    Full-time
                </label>
            </fieldset>

            {/* With checked box, you can have multiple values so when getting use
                formData.getAll("dietaryRestrictions")
             */}
            <fieldset>
                <legend>Dietary restrictions:</legend>
                <label>
                    <input type="checkbox" name="dietaryRestrictions" value="kosher" />
                    Kosher
                </label>
                <label>
                    <input type="checkbox" name="dietaryRestrictions" value="vegan" />
                    Vegan
                </label>
                <label>
                    <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
                    Gluten-free
                </label>
            </fieldset>

            {/* Drop down / select
                select needs a NAME attribute to identify it in formData
                Each option needs a VALUE attribute that is then linked to the NAME attibute when selected
                disabled attribute can be added to make an option not selectable (good for default value)
                set the dafault value of select to be the chosen option
            */}
            <label htmlFor="favColour">What is your favourite colour? </label>
            <select id="favColour" name="favColour" defaultValue="" required> {/* required means something needs selecting and defaultValue is set to the default option we want */}
                <option value="" disabled>-- Choose a colour --</option> {/* disabled means this one can't be selected! Good for the default option */}
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
          

            {/* */}

            
            <button>Submit</button>

        </form>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
);