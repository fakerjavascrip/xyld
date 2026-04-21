export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerCard" role="contentinfo" aria-label="页脚信息">
          <div className="footerBrand">
            <div className="footerKicker">一站式农副产品供应链 · 仓储 · 分拣 · 冷链配送服务商</div>
          </div>

          <div className="footerDivider" aria-hidden="true" />

          <div className="footerMeta">
            <div className="footerRow">
              <span className="footerIcon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.6 10.8c1.6 3.2 3.4 5 6.6 6.6l2.2-2.2c.2-.2.5-.3.8-.2 1 .3 2.1.5 3.2.5.4 0 .8.4.8.8V20c0 .4-.4.8-.8.8C9.4 21 3 14.6 3 6.8c0-.4.4-.8.8-.8H7c.4 0 .8.4.8.8 0 1.1.2 2.2.5 3.2.1.3 0 .6-.2.8l-2.2 2.2Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div className="footerRowText">
                <div className="footerLabel">电话</div>
                <div className="footerValue">13772098968 / 18729515958</div>
              </div>
            </div>

            <div className="footerRow">
              <span className="footerIcon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.7 2 6 4.7 6 8c0 4.2 5.3 11.2 5.5 11.4.3.4.7.4 1 0C12.7 19.2 18 12.2 18 8c0-3.3-2.7-6-6-6Zm0 8.2A2.2 2.2 0 1 1 12 6a2.2 2.2 0 0 1 0 4.2Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div className="footerRowText">
                <div className="footerLabel">地址</div>
                <div className="footerValue">陕西省西安市雁塔区长延堡街道南飞鸿广场5幢1单元909室</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

