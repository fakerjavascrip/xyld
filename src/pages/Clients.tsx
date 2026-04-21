const items = [
  {
    title: "学校食堂",
    desc: "提供营养均衡、种类丰富的食材，严格把控源头，确保学生饮食安全与健康成长。",
  },
  {
    title: "政府物资采购",
    desc: "专业承接政府机关、企事业单位食堂食材供应，流程规范透明，服务周到高效。",
  },
  {
    title: "医院食堂",
    desc: "提供高品质、符合病患康复及医护人员工作需求的特殊餐饮原材料，保障饮食健康。",
  },
  {
    title: "其他B端客户",
    desc: "同时深度服务大型连锁餐饮、品牌酒店及企业员工餐厅，满足多样化的食材供应需求。",
  },
] as const;

export default function Clients() {
  return (
    <div className="page domPage">
      <div className="container">
        <div className="domCard">
          <h1 className="domTitle">服务客户</h1>
          <div className="domBody">
            <div className="domGrid two">
              {items.map((it) => (
                <div key={it.title} className="domItem">
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

