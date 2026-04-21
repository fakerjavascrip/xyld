const steps = [
  {
    no: "01",
    title: "需求对接",
    desc: "专业客户经理深入沟通，全面了解您的业务需求。",
  },
  {
    no: "02",
    title: "方案定制",
    desc: "根据需求，量身定制专属的食材采购与配送方案。",
  },
  {
    no: "03",
    title: "订单确认",
    desc: "双方确认合作方案与订单细节，正式签订合作协议。",
  },
  {
    no: "04",
    title: "采购分拣",
    desc: "源头严格采购，进行精细化分拣、质检与标准化加工。",
  },
  {
    no: "05",
    title: "冷链配送",
    desc: "调度专业冷链车队，全程温控，准时送达指定地点。",
  },
  {
    no: "06",
    title: "验收结算",
    desc: "客户现场验收货品，确认数量与质量无误后进行结算。",
  },
] as const;

export default function Process() {
  return (
    <div className="page domPage">
      <div className="container">
        <div className="domCard">
          <h1 className="domTitle">服务流程</h1>
          <div className="domBody">
            <div className="domGrid three">
              {steps.map((s) => (
                <div key={s.no} className="domItem">
                  <div className="domNo">{s.no}</div>
                  <div className="domItemTitle">{s.title}</div>
                  <div className="domItemDesc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

