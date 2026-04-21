export default function Home({ baseUrl }: { baseUrl: string }) {
  const bg = `${baseUrl}img/1.webp`;
  const bgFallback = `${baseUrl}img/1.png`;

  return (
    <div className="homeHero" style={{ ["--hero-bg" as never]: `url(${bg})` }}>
      {/* Preload fallback for browsers without WebP */}
      <img className="homeHeroPreload" src={bgFallback} alt="" aria-hidden="true" />

      <div className="homeHeroOverlay" />

      <div className="container homeHeroContent">
        <div className="homeHeroCard">
          <div className="homeHeroTitle">西安鑫雅立道商贸有限公司</div>
          <div className="homeHeroSub">安全 · 新鲜 · 高效 · 省心</div>
          <div className="homeHeroLine">一站式农副产品供应链 · 仓储 · 分拣 · 冷链配送服务商</div>
        </div>
      </div>
    </div>
  );
}

