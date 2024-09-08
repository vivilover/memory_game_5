import { useState, useEffect } from "react";
import Image from "./Image.jsx";
import Button from "./Button.jsx";
import ImageContainer from "./ImageContainer.jsx";
import { shuffle } from '../utils/util.js';

// picsum.photos to use
// id: 40, 152, 169, 189, 200, 213, 219, 225, 231, 237, 309,416,384, 433, 512
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
const Facil = ({ handleStateChange, setCurrScore, setHighScore }) => {
  // images is an array of objects
  const [images, setImages] = useState([]);

  const handleClick = (targetId) => {
    console.log(targetId);
    const targetImg = images.find(img => img.id === targetId);
    console.log(targetImg);
    setCurrScore(currScore => currScore + 1);
    // if ()
  }
  useEffect(() => {
    Promise.all([
      fetch("https://picsum.photos/id/40/150/150"),
      fetch("https://picsum.photos/id/152/150/150"),
      fetch("https://picsum.photos/id/169/150/150"),
      fetch("https://picsum.photos/id/309/150/150"),
      fetch("https://picsum.photos/id/219/150/150"),
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
                handleClick={() => handleClick(imgObj.id)}
              />
            ))}
          </ImageContainer>
        )}
      </div>
    </>
  );
};

export default Facil;