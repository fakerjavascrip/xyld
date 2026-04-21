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
        <div className="stage" style={{ ["--stage-bg" as never]: `url(${fallbackSrc ?? src})` }}>
          <div className="stageOverlay" />
          <div className="stageFrame">
            <picture>
              <source srcSet={src} type="image/webp" />
              <img src={fallbackSrc ?? src} alt={alt} loading="eager" decoding="async" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

