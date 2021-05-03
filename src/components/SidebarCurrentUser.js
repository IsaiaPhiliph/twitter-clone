import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { More } from "@material-ui/icons";
import React from "react";
import "./SidebarCurrentUser.css";
import { Tooltip } from "react-tippy";
import { logout } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";

function SidebarCurrentUser() {
  const dispatch = useDispatch();
  const logoutApp = () => {
    auth.signOut();
    dispatch(logout());
  };
  return (
    <div className="sidebarCurrentUser">
      <Avatar />
      <div className="sidebarCurrentUser__names">
        <span className="sidebarCurrentUser__namesDisplay">Pablo Valverde</span>
        <span className="sidebarCurrentUser__namesUsername">@IsaiaPhiliph</span>
      </div>
      <div className="sidebarCurrentUser__namesIcon">
        <MoreHorizIcon onClick={() => logoutApp()} />
      </div>
    </div>
  );
}

export default SidebarCurrentUser;
