import { useState, useEffect } from 'react';
import Image from './Image.jsx';
import Button from './Button.jsx';

const Facil = ({ handleStateChange }) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
      Promise.all([
        fetch('https://picsum.photos/id/257/150/150'),
        fetch('https://picsum.photos/id/247/150/150'),
        fetch('https://picsum.photos/id/100/150/150'),
        fetch('https://picsum.photos/id/110/150/150'),
        fetch('https://picsum.photos/id/101/150/150'),
      ]).then((responses) => {
        return Promise.all(responses.map(res => {
          return res;
        }))
      }).then((data) => {
        let pics = [];
        for (const picData of data) {
          const pic = picData.url;
          pics.push(pic);
        }
        setImages(pics);
      }).catch(err => {
        console.log(err);
      })
    }, [])
  
    return (
      <>
        <Button handleStateChange={handleStateChange}>Volver a Principal</Button>
        <div>Facil Playboard</div>
        <div>
          {images && (
            <>
              {images.map((imgSrc, idx) => <Image imageUrl={imgSrc} key={idx} />)}
            </>
          )}
        </div>
      </>
    );
}

export default Facil;