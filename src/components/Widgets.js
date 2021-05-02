import { MoreHoriz, SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__searchBar">
        <SearchOutlined className="widgets__searchIcon" />
        <input type="text" placeholder="Buscar en twitter" />
      </div>
      <div className="widgets__trends">
        <h2>¿Qué está pasando?</h2>
        <div className="widgets__trend">
          <div className="widgets__trendLocation">
            <span className="widgets__trendLocationText">
              Tendencia en España
            </span>
            <MoreHoriz className="widgets__trendLocationIcon" />
          </div>
          <span className="widgets__trendTopic">Lisa</span>
          <span className="widgets__trendAmmount">1,5 M Tweets</span>
        </div>
        <div className="widgets__trend">
          <div className="widgets__trendLocation">
            <span className="widgets__trendLocationText">
              Tendencia en España
            </span>
            <MoreHoriz className="widgets__trendLocationIcon" />
          </div>
          <span className="widgets__trendTopic">Homer</span>
          <span className="widgets__trendAmmount">2,6 M Tweets</span>
        </div>
        <div className="widgets__trend">
          <div className="widgets__trendLocation">
            <span className="widgets__trendLocationText">
              Tendencia en España
            </span>
            <MoreHoriz className="widgets__trendLocationIcon" />
          </div>
          <span className="widgets__trendTopic">Marge</span>
          <span className="widgets__trendAmmount">2,6 M Tweets</span>
        </div>
        <div className="widgets__trend">
          <div className="widgets__trendLocation">
            <span className="widgets__trendLocationText">
              Tendencia en España
            </span>
            <MoreHoriz className="widgets__trendLocationIcon" />
          </div>
          <span className="widgets__trendTopic">Bart</span>
          <span className="widgets__trendAmmount">6,7 M Tweets</span>
        </div>
        <a href="/" className="widgets__showMore">
          <span>Mostrar más</span>
        </a>
      </div>
    </div>
  );
}

export default Widgets;
