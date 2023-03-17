import "./App.css";
import { useState, useEffect } from "react";
//hooks are functions
import { getMovie } from "./services/omdbapi";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import AdditionalContentExample from "./components/Alerts";

function App() {
  //Store the data of a movie
  const [movie, setMovie] = useState(null);
  //null is always a good way to initialize piece of state when not sure waht we are going to get back from the api

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovie("Clueless");
      // console.log(data);
      setMovie(data);
      //returning it into state
    };
    fetchData();
  }, []);
  //if there are side effects best to do it with a useEffect
  //The useEffect will tell react that your component needs to do this after rendering and react will remember the runction you passed (aka its "effect") and call after performing DOM updates. this will get rendered when you first render website and then you can call the rest of the api's with the bracket [] so it can help putting in an array.
  //the side efffect of rendering clueless will happen after site is rendered

  return (
    <div className="App">
      <AdditionalContentExample />
      <NavBar />
      <Form movieSearch={getMovie} setMovie={setMovie} />
      {/* passing the getMovie to the form, we are prop drilling right now and passing the props to the form.js */}
      {/* setMovie: passing down function to update the data into th state */}
      {/* <MovieDisplay movie={movie}/> */}
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
// const [noovie, setNoovie] = useState(null)
//practicing syntax
