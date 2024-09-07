import { useState, useEffect } from "react";
import Image from "./Image.jsx";
import Button from "./Button.jsx";
import { shuffle } from '../utils/util.js';

// for each click on the image, tell if duplicates are clicked
// shuffle images after clicks
// increase score if new images clicked
// set score to 0 if duplicate is clicked
// if max score is reached:
//    POPUP: ask user to play again OR go back to main
const Facil = ({ handleStateChange }) => {
  const arr = [1, 2, 3, 4, 5];
  console.log(shuffle(arr));
  const [images, setImages] = useState([]);
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
      .then((data) => {
        let pics = [];
        for (const picData of data) {
          const pic = picData.url;
          pics.push(pic);
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
          <>
            {images.map((imgSrc, idx) => (
              <Image
                imageUrl={imgSrc}
                key={idx}
                handleClick={() => console.log("clicked img")}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Facil;
