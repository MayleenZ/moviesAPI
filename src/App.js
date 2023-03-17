import "./App.css";
import { useState } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  //Store the data of a movie
  const [movie, setMovie] = useState(null);
  //null is always a good way to initialize piece of state when not sure waht we are going to get back from the api
  //
  //fetch data from api, this is the function that is making the request to the API
  const getMovie = async (searchTerm) => {
    // async; special keyword to make an asynchronous function
    const response = await fetch(`https://www.omdbapi.com/?apikey=20d49ef4&t=${searchTerm}`)
      //The t is there to search for the movie title and the search wil be the user searchTerm they type in the input, we put it in backticks , having await is going to pause execution and wait for data and ocntinue as soon as the data comes back , await only works on function that are marked async (they always go together)
      
      // wait for this lne of code to complete
      // * Fetch function needs url to fetch the data
      const data = await response.json();
      setMovie(data);
      // First we get an object , we need to parse the data from the data to a JSON data so we can read it 
      // This takes time so we need to do an await so that data will be converted to json that we can read and later iterate over or dispaly on UI
    };
    return (
    <div className="App">
      <Form movieSearch={getMovie} />
      {/* passing the getMovie to the form, we are prop drilling right now and passing the props to the form.js */}
      {/* <MovieDisplay movie={movie}/> */}
      {movie && <MovieDisplay movie={movie} />}
    </div>
  );
}

export default App;
// const [noovie, setNoovie] = useState(null)
//practicing syntax
