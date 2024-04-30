import SidebarItem from "./SidebarItem"
import items from "../data/content.json"
import Heading from "./heading"
import {useState } from "react"

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className={collapsed ? "sidebar-collapsed":"sidebar"} onMouseEnter={()=>setCollapsed(false)} onMouseLeave={()=>setCollapsed(true)}>
      <Heading collapsed={collapsed} setCollapsed={setCollapsed} />
          <div className="contain">{ items.map((item, index) => <SidebarItem key={index} item={item} collapsed={collapsed}/>) }</div>
        </div>
    )
}