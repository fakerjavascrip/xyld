const items = [
  {
    no: "01.",
    title: "农副产品供应链配送",
    desc: "源头直采，全品类覆盖，为B端客户提供高效、准时的定制化配送服务方案。",
  },
  {
    no: "02.",
    title: "专业仓储服务",
    desc: "配备现代化立体仓储中心，结合智能库存管理系统，全方位确保货物存储安全。",
  },
  {
    no: "03.",
    title: "精细化分拣加工",
    desc: "执行标准化流水线作业，严格品控把关，可根据客户需求提供定制化服务。",
  },
  {
    no: "04.",
    title: "全程冷链运输",
    desc: "拥有专业温控冷链车队，建立全链路温度监控体系，依托高效配送保障食材新鲜。",
  },
] as const;

export default function Business() {
  return (
    <div className="page domPage">
      <div className="container">
        <div className="domCard">
          <h1 className="domTitle">核心业务</h1>
          <div className="domBody">
            <div className="domGrid">
              {items.map((it) => (
                <div key={it.no} className="domItem">
                  <div className="domNo">{it.no}</div>
                  <div className="domItemTitle">{it.title}</div>
                  <div className="domItemDesc">{it.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

