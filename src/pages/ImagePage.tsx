export default function ImagePage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="page">
      <div className="container">
        <div className="imageCard">
          <img src={src} alt={alt} />
        </div>
      </div>
    </div>
  );
}

