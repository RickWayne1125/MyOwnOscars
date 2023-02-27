// This component is used to handle the cells of the grid.
// It is used to display the poster image of the movie or display the choose button if the cell is empty.

import { useState } from "react";
import SelectButton from "./SelectButton";
import MovieSelector from "./MovieSelector";
// import MoviePoster from "./MoviePoster";
import { Modal } from "antd";
import "./Components.css";
import "./Fonts.css";
import ImageCrop from "./ImageCrop";

const Cell = (award) => {
  const [visible, setVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [altMovie, setAltMovie] = useState(null);
  const [step, setStep] = useState(0); // 0: select movie, 1: submit

  const handleOK = (movie) => {
    setSelectedMovie(movie);
    setVisible(false);
    setStep(0);
  };

  const handleCancel = () => {
    setVisible(false);
    // set Modal to default state
    setAltMovie(null);
    setStep(0);
  };

  const handleSelectMovie = () => {
    setVisible(true);
  };

  const handleAltMovieSelection = (movie) => {
    setAltMovie(movie);
  };

  return (
    <>
      <div className="cell-container">
        <div className="cell">
          <div className="award-gold">
            <h3>{award.awardName}</h3>
          </div>
          {selectedMovie ? (
            // <MoviePoster
            //   imageUrl={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            //   scale={0.95}
            //   onClick={() => handleSelectMovie()}
            //   background="#333"
            // />
            // <div className="image-container">
            //   <Image
            //     width="100%"
            //     src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            //     preview={false}
            //     onClick={() => handleSelectMovie()}
            //     className="rounded-image"
            //   />
            // </div>
            <ImageCrop
              imageUrl={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              onClick={() => handleSelectMovie()}
            />
          ) : (
            <div
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                aspectRatio: "27/40",
              }}
            >
              <SelectButton onClick={handleSelectMovie} />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Select a movie"
        open={visible}
        okText="Select"
        cancelText="Cancel"
        onOk={() => handleOK(altMovie)}
        onCancel={handleCancel}
      >
        {/* get result from movie selector */}
        <MovieSelector
          onSelectionChange={handleAltMovieSelection}
          step={step}
          setStep={setStep}
        />
      </Modal>
    </>
  );
};

export default Cell;
