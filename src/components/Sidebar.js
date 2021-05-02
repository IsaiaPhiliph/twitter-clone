import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import SidebarCurrentUser from "./SidebarCurrentUser";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarOption Icon={TwitterIcon} active />
      <SidebarOption active text="Inicio" Icon={HomeRoundedIcon} />
      <SidebarOption text="Explorar" Icon={SearchIcon} />
      <SidebarOption text="Notificaciones" Icon={NotificationsIcon} />
      <SidebarOption text="Mensajes" Icon={MailOutlineIcon} />
      <SidebarOption text="Guardados" Icon={BookmarkBorderIcon} />
      <SidebarOption text="Listas" Icon={ListAltIcon} />
      <SidebarOption text="Perfil" Icon={PermIdentityIcon} />
      <SidebarOption text="Más opciones" Icon={MoreHorizIcon} />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Twittear
      </Button>

      <SidebarCurrentUser />
    </div>
  );
};

export default Sidebar;
