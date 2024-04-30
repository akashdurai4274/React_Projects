import React, { useState } from "react";

function SidebarItem({ item, collapsed, parentDropdownFunction }) {
  const [open, setOpen] = useState(false);

  const handleParentDropdown = () => {
    if (!collapsed) {
      setOpen(false)
    }
    setOpen(!open);
    if (parentDropdownFunction) {
      parentDropdownFunction();
    }
  };


  if (item.childrens) {
    return (
      <div
        className={open ? "sidebar-item open" : "sidebar-item"}
        ///onMouseLeave={() => setOpen(false)}
      >
        <div className= "sidebar-title" onClick={handleParentDropdown}>
          <span>{item.icon && <i id="icons" className={item.icon}></i>}</span>
          <span className={collapsed ? "collapsed" : "side-title"}>
            {item.title}
          </span>
          <i
            style={{ fontSize: "12px" }}
            className={!collapsed ? "bi-chevron-down toggle-btn" : "collapsed"}
            onClick={handleParentDropdown}
          ></i>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem
              key={index}
              item={child}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="wrap">
        <a href={item.path || "#"} className="sidebar-item plain">
          {item.icon && <i className={item.icon}></i>}
          {item.title}
        </a>
      </div>
    );
  }
}

export default SidebarItem;
