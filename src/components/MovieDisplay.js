import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function MovieDisplay(props) {
  const { movie } = props;
  console.log(movie);
  const loaded = () => {
    return (
      <div className="MovieDisplay">
        <br />
        <h1 className="MovieTitle">{movie.Title}</h1>
        <img className="MovieImg" src={movie.Poster} height="400px" alt={movie.Title}/>
        <br />
        <br />
        <p className="MoviePlot">{movie.Plot}</p>
        <div className="mb-3">
          <DropdownButton variant="outline-black" title="Show More">
            <Dropdown.Item> {movie.Year} </Dropdown.Item>
            <Dropdown.Item>{movie.Actors}</Dropdown.Item>
            <Dropdown.Item>{movie.Genre}</Dropdown.Item>
          </DropdownButton>
          <hr />
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>no movie to display</h1>;
  };

  return movie ? loaded() : loading();
  //using ternerary to return loaded and loading whether there is a movie or not
}

export default MovieDisplay;

//after you search movie, your movie gets put into state
