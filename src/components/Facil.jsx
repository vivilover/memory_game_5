import { useState, useEffect } from "react";
import Image from "./Image.jsx";
import Button from "./Button.jsx";
import ImageContainer from "./ImageContainer.jsx";
import { shuffle } from '../utils/util.js';

// for each click on the image, tell if duplicates are clicked
// shuffle images after clicks
// increase score if new images clicked
// set score to 0 if duplicate is clicked
// if max score is reached:
//    POPUP: ask user to play again OR go back to main

/**
 * What I have: shuffle algorithm
 * What I don't have: how to shuffle the state and show it to the user
 * Needs to be displayed only once, and not continue shuffling
 * When user clicks, { clicked: false -> true }
 * If clicked: true is clicked, show that game is over
 * If clicked: false is clicked, change clicked: true and shuffle the image
 */
const Facil = ({ handleStateChange }) => {
  const [images, setImages] = useState([]);

  const handleClick = (e) => {
    console.log(e);
    // e.target.style.visibility = "hidden";
  }
  useEffect(() => {
    Promise.all([
      fetch("https://picsum.photos/id/257/150/150"),
      fetch("https://picsum.photos/id/247/150/150"),
      fetch("https://picsum.photos/id/100/150/150"),
      fetch("https://picsum.photos/id/110/150/150"),
      fetch("https://picsum.photos/id/101/150/150"),
    ])
      .then((responses) => {
        return Promise.all(
          responses.map((res) => {
            return res;
          })
        );
      })
      .then((data) => { // data is an array of Response objects
        let pics = [];
        for (let idx = 0; idx < data.length; idx++) {
          const picObj = {
            id: idx,
            picUrl: data[idx].url,
            clicked: false,
          }
          pics.push(picObj);
        }
        setImages(pics);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Button handleStateChange={handleStateChange}>Volver a Principal</Button>
      <div>Facil Playboard</div>
      <div>
        {images && (
          <ImageContainer>
            {images.map((imgObj) => (
              <Image
                imageUrl={imgObj.picUrl}
                key={imgObj.id}
                handleClick={handleClick}
              />
            ))}
          </ImageContainer>
        )}
      </div>
    </>
  );
};

export default Facil;