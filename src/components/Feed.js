import React, { useEffect, useState } from "react";
import useFirestore from "../hooks/useFirestore";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed() {
  const { docs } = useFirestore("tweets");
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      console.log("setting date");
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  const getTimeFromTweet = (date, timestamp) => {
    let hours = Math.floor((date - timestamp.toDate()) / 1000 / 60 / 60);
    let minutes = Math.floor(((date - timestamp.toDate()) / 1000 / 60) % 60);
    let seconds = Math.floor(((date - timestamp.toDate()) / 1000) % 60);
    if (hours > 1) {
      return `${hours}h ${minutes}min`;
    } else if (minutes >= 1) {
      return `${minutes}min ${seconds}secs`;
    } else {
      return `Justo ahora`;
    }
  };

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Inicio</h2>
      </div>
      <TweetBox />
      {/* Tweets */}
      {docs &&
        docs.map((doc) => (
          <Post
            key={doc.id}
            displayName="Pablo Valverde"
            username="IsaiaPhiliph"
            verified
            text={doc.text}
            image={doc.url}
            timestamp={doc.timestamp && getTimeFromTweet(date, doc.timestamp)}
          />
        ))}
    </div>
  );
}

export default Feed;
