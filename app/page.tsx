import Gallery from "./Gallery";

export default function Home() {

  const pictures = ["public/pictures/high-noon.jpg", "public/pictures/Mei.png", "public/pictures/tracer.jpg", "public/pictures/Zarya.png"]

  return (
  <div id="content">
    <Gallery memes={pictures} />
  </div>
  );
}
