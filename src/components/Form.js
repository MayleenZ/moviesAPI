import { useState } from "react";
//useRef is helpful for forms

function Form(props) {
  const { movieSearch, username } = props;
  //here we are calling the prop that we passed down from the app.js file.

  const [formData, setFormData] = useState({ searchTerm: "" , username: ""});
  // initialize to an object with key of searchTerm and value of empty string
  //the state is connected to our input now
//easier to manage an object 
//benefit of following this approach is bc we can call handleChange, and the e.target will point to either inputs and if we need to update the state we can call setForm data and do the rest which ive explained below. The state will recognize two different inputs 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //we have a handlechange which will be called anytime there is any change inside of the input, handlechang ewill take in event and call set form data , initialize , spread and evaluate the event.target.name which is the searchTerm and then will be able to update it with e.target.value which is text inside of the input

  const handleSubmit = (e) => {
    e.preventDefault();
    // if we dont have this, the normal behavior of a form is that it refreshes , we dont want to do this bc its a single page app in react, we should always add this to stop the default behavior of the form (trying to send data somewhere and refresh the app)
    movieSearch(formData.searchTerm)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* add the event listener to the form itself */}
        <h2>Movie Search</h2>
        <input
          type="text"
          placeholder="Search Movie Title"
          value={formData.searchTerm}
          name="searchTerm"
          onChange={handleChange}
          // react has control of the input and as of now its an empty string
        />
        <input
          type="text"
          value={formData.username}
          name="username"
          placeholder = "username"
          onChange={handleChange}
          // react has control of the input and as of now its an empty string
          ///Can duplicate the inputs as many times and pass through the onChange event handler, this aproach is reuseable 
        />
        {/* uusing the useref we created a new instance of the reference to create a reference to any element you want to attach it to, we initiliazed the hook using the useRef  */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;

//we can not use state in form bc we need data in movie display
//lift up state to app component
