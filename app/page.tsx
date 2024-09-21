import Gallery from "./Gallery";

export default function Home() {

  const pictures = ["/pictures/high-noon.jpg", "/pictures/Mei.jpg", "/pictures/tracer.jpg", "/pictures/Zarya.png"]

  return (
  <div id="content">
    <Gallery memes={pictures} />
  </div>
  );
}
