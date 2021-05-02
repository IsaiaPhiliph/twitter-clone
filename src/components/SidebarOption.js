import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      {text ? <h2>{text}</h2> : null}
    </div>
  );
}

export default SidebarOption;
