import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { More } from "@material-ui/icons";
import React from "react";
import "./SidebarCurrentUser.css";

function SidebarCurrentUser() {
  return (
    <div className="sidebarCurrentUser">
      <Avatar />
      <div className="sidebarCurrentUser__names">
        <span className="sidebarCurrentUser__namesDisplay">Pablo Valverde</span>
        <span className="sidebarCurrentUser__namesUsername">@IsaiaPhiliph</span>
      </div>
      <div className="sidebarCurrentUser__namesIcon">
        <MoreHorizIcon />
      </div>
    </div>
  );
}

export default SidebarCurrentUser;
