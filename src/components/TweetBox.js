import { Avatar, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import useStorage from "../hooks/useStorage";
import { db, timestamp } from "../firebase/config";

function TweetBox() {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const { progress, url, error } = useStorage(file);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    console.log("Updating file state...");
  };

  useEffect(() => {
    if (url) {
      setFile(null);
      console.log("Setting file state to null because we already have the url");
    }
  }, [url, setFile]);

  const handleTweet = (e) => {
    e.preventDefault();
    db.collection("tweets")
      .add({
        text,
        url,
        timestamp: timestamp(),
      })
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="tweetBox">
      {error ? <p>{error}</p> : null}
      <form>
        <Avatar
          className="tweetBox__avatar"
          src="https://pbs.twimg.com/profile_images/573246533556166657/9dMd2wS5_400x400.jpeg"
        />
        <div className="tweetBox__input">
          <input
            type="text"
            placeholder="¿Qué está pasando?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="tweetBox__footer">
            <div className="tweetBox__footerIcons">
              <label htmlFor="imageUpload">
                <ImageOutlinedIcon />
              </label>
              <input type="file" id="imageUpload" onChange={handleChange} />
              {file && progress ? <span>{progress}%</span> : null}
            </div>
            <Button
              type="submit"
              className="tweetBox__tweetButton"
              onClick={handleTweet}
            >
              Tweet
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
