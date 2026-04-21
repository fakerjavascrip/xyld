export default function Contact() {
  return (
    <div className="page domPage">
      <div className="container">
        <div className="domCard">
          <h1 className="domTitle">联系我们</h1>

          <div className="domBody">
            <div className="contactDomGrid">
              <div className="domItem">
                <div className="domItemTitle">联系电话</div>
                <div className="domItemDesc">王经理13772098968</div>
                <div className="domItemDesc">冯经理18729515958</div>
              </div>

              <div className="domItem">
                <div className="domItemTitle">公司地址</div>
                <div className="domItemDesc">陕西省西安市雁塔区长延堡街道南飞鸿广场5幢1单元909室</div>
              </div>

              <div className="domItem span2">
                <div className="domItemTitle">公司资质</div>
                <div className="domItemDesc">营业执照</div>
                <div className="domItemDesc">食品经营许可证</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

