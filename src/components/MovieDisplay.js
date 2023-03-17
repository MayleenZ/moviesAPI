function MovieDisplay (props) {
    const {movie} = props
    console.log(movie);
    return (
        <div>
            <br />
            <h1>{movie.Title}</h1>
            <img src = {movie.Poster} height = "400px"/>
            <p>{movie.Plot}</p>
        </div>
    )
}

export default MovieDisplay