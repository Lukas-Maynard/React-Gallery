'use client';
import { useState } from 'react'; 

export default function Gallery(props: { memes: string[]; }) {

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % props.memes.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + props.memes.length) % props.memes.length);
  };

  return (
    <div>
    <img
  src={props.memes[currentImage]}
  alt={`Gallery Image ${currentImage + 1}`}
  onError={(e) => console.log("Image not found", e.currentTarget.src)}
  style={{ height: "600px", margin: "2% 2% 0 2%"}}
/>
    <div>
      <button style={{padding: "2% 2% 2% 2%", margin: "2% 2% 2% 2%", backgroundColor: "#ededed", color: "#0a0a0a"}} onClick={prevImage}>Previous</button>
      <button style={{padding: "2% 2% 2% 2%", margin: "2% 2% 2% 2%", backgroundColor: "#ededed", color: "#0a0a0a"}} onClick={nextImage}>Next</button>
    </div>
  </div>
  );
}
