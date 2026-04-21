export type NewsItem = {
  date: string;
  title: string;
  summary: string;
  tag: string;
};

export default function NewsGrid({ items }: { items: NewsItem[] }) {
  return (
    <div className="newsGrid">
      {items.map((it) => (
        <article key={`${it.date}-${it.title}`} className="newsCard">
          <div className="newsMeta">
            <span className="pill">{it.tag}</span>
            <time className="newsDate" dateTime={it.date}>
              {it.date}
            </time>
          </div>
          <h3 className="newsTitle">{it.title}</h3>
          <p className="newsSummary">{it.summary}</p>
          <div className="newsFooter">
            <a className="textLink" href="#contact">
              咨询详情
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

