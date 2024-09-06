import { useState, useEffect } from 'react';
import { Image } from './Image.style';


// get 5, 8, 12 (easy, med, hard)
const apiKey = process.env.PERENUAL_API_KEY;
const PlayBoard = () => {
  const api_key = 'sk-BDgN66d38339cfe9e6689';
  const [image, setImage] = useState('');
  let plant_name = ''
  useEffect(() => {
    Promise.all([
      fetch(`https://perenual.com/api/species/details/10?key=${apiKey}`),
      fetch(`https://perenual.com/api/species/details/11?key=${apiKey}`),
      fetch(`https://perenual.com/api/species/details/12?key=${apiKey}`)
    ]).then((responses) => {
      return Promise.all(responses.map(res => {
        return res.json();
      }))
    }).then((data) => {
      console.log(data);
      for (const plant of data) {
        console.log(plant.default_image.original_url);
      }
    }).catch(err => {
      console.log(err);
    })
    // const res = fetch(`https://perenual.com/api/species/details/10?key=${apiKey}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     plant_name = data.common_name;
    //     setImage(data.default_image.original_url);
    //     console.log(image);
    //   })
    //   .catch(err => console.error(err));
  }, [])

  return (
    <>
      <div>Playboard</div>
      <div>
        {image && <Image src={image}/>}
      </div>
    </>
  );
}

export default PlayBoard;