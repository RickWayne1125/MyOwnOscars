import React, { useState } from "react";
import { Button, Input } from "antd";
import MoviePoster from "./MoviePoster";

const apiToken = process.env.REACT_APP_API_TOKEN;

const MovieSelector = ({ onSelectionChange, step, setStep }) => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiToken}&page=1&include_adult=false&query=${searchText}&limit=10`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  const handleMovieSelection = (movie) => {
    console.log(movie);
    setStep(1);
    setSelectedMovie(movie);
    onSelectionChange(movie);
  };

  return (
    <>
      <div style={{ padding: "24px", maxWidth: "800px", margin: "auto" }}>
        {selectedMovie && step ? (
          <MoviePoster
            header={selectedMovie.title}
            imageUrl={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            footer={`${selectedMovie.release_date} | ${selectedMovie.vote_average}/10 | ${selectedMovie.vote_count} votes`}
            details={selectedMovie.overview}
            scale={1.2}
          />
        ) : (
          <div>
            <Input
              value={searchText}
              onChange={handleSearchTextChange}
              placeholder="Search for a movie"
              style={{ marginBottom: "16px" }}
            />
            <Button type="primary" onClick={handleSearchMovies}>
              Search
            </Button>
            <br />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: "16px",
                marginTop: "24px",
              }}
            >
              {movies.map((movie) => (
                <MoviePoster
                  key={movie.id}
                  header={movie.title}
                  imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  footer={movie.release_date}
                  scale={1}
                  onClick={() => handleMovieSelection(movie)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieSelector;
