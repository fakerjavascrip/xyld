export default function ImagePage({
  src,
  alt,
  fallbackSrc,
}: {
  src: string;
  alt: string;
  fallbackSrc?: string;
}) {
  return (
    <div className="page">
      <div className="container">
        <div className="imageCard">
          <picture>
            <source srcSet={src} type="image/webp" />
            <img src={fallbackSrc ?? src} alt={alt} loading="lazy" decoding="async" />
          </picture>
        </div>
      </div>
    </div>
  );
}

