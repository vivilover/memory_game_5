import { useState, useEffect } from 'react';
import Image from './Image.jsx';
import Button from './Button.jsx';
import ImageContainer from './ImageContainer.jsx';
import ReplayModal from './ReplayModal.jsx';
import { shuffle } from '../utils/util.js';

// picsum.photos to use
// id: 40, 152, 169, 189, 200, 213, 219, 225, 231, 237, 309,416,384, 433, 512

const Easy = ({
  handleStateChange,
  currScore,
  setCurrScore,
  highScore,
  setHighScore,
}) => {
  // images is an array of objects
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const resetClickProperty = () => {
    for (let idx = 0; idx < images.length; idx++) {
      images[idx].clicked = false;
    }
  }
  const replay = () => {
    resetClickProperty();
    setCurrScore(0);
  }
  const handleClick = (targetId) => {
    const targetImg = images.find((img) => img.id === targetId);
    const scoreToClearStage = images.length;
    if (!targetImg.clicked) {
      if (highScore === currScore && highScore < images.length) {
        setHighScore((score) => score + 1);
      }
      setCurrScore((score) => score + 1);
      targetImg.clicked = true;
      const shuffledImages = shuffle(images);
      setImages(shuffledImages);
      if (currScore + 1 === scoreToClearStage) {
        console.log('you cleared Facil stage!');
        setShowModal(true);
      }
    } else {
      resetClickProperty();
      const shuffledImages = shuffle(images);
      setImages(shuffledImages);
      setCurrScore(0);
    }
  };
  useEffect(() => {
    Promise.all([
      fetch('https://picsum.photos/id/40/150/150'),
      fetch('https://picsum.photos/id/152/150/150'),
      fetch('https://picsum.photos/id/169/150/150'),
      fetch('https://picsum.photos/id/309/150/150'),
      fetch('https://picsum.photos/id/237/150/150'),
    ])
      .then((responses) => {
        return Promise.all(
          responses.map((res) => {
            return res;
          })
        );
      })
      .then((data) => {
        // data is an array of Response objects
        let pics = [];
        for (let idx = 0; idx < data.length; idx++) {
          const picObj = {
            id: idx,
            picUrl: data[idx].url,
            clicked: false,
          };
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
      <div>
        <ReplayModal
          showModal={showModal}
          setShowModal={setShowModal}
          handleStateChange={handleStateChange}
          replay={replay}
        />
      </div>
      <Button handleStateChange={handleStateChange}>
        Back to Main
      </Button>
      <div>Easy Playboard</div>
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

export default Easy;
