 //*fetch data from api, this is the function that is making the request to the API
 export const getMovie = async (searchTerm) => {
    // async; special keyword to make an asynchronous function
    try {
      ///if anything happens to fetch request the error will be caught below
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=20d49ef4&t=${searchTerm}`
      );
      //The t is there to search for the movie title and the search wil be the user searchTerm they type in the input, we put it in backticks , having await is going to pause execution and wait for data and ocntinue as soon as the data comes back , await only works on function that are marked async (they always go together)

      // wait for this lne of code to complete
      // * Fetch function needs url to fetch the data
    //   const data = await response.json();
    //   setMovie(data);
    const data = await response.json()
    return data;
    //*we are just returning data an dpassing it to setMovie inside App component
      // First we get an object , we need to parse the data from the data to a JSON data so we can read it
      // This takes time so we need to do an await so that data will be converted to json that we can read and later iterate over or dispaly on UI
    } catch (error) {
      //the error will be caught and displayed in console log
      console.error(error);
    }
  };