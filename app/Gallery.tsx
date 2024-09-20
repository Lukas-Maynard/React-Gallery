import React, { useState } from 'react';

export default function Home({ memes }) {

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % memes.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + memes.length) % memes.length);
  };

  return (
    <div>
    <img src={memes[currentImage]} alt={`Gallery Image ${currentImage + 1}`} />
    <div>
      <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  </div>
  );
}
