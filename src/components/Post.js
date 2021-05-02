import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { motion } from "framer-motion";

function Post({ displayName, username, verified, text, image, timestamp }) {
  return (
    <motion.div className="post" layout>
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/573246533556166657/9dMd2wS5_400x400.jpeg" />
      </div>
      <div className="post__content">
        <div className="post__author">
          <span className="post__authorName">{displayName}</span>
          {verified ? (
            <span className="post__verifiedIcon">
              <VerifiedUserIcon />
            </span>
          ) : null}
          <span className="post__authorUsername">@{username}</span>
          <span className="post__dot">·</span>
          <span className="post__authorTimestamp">{timestamp}</span>
        </div>
        <div className="post__text">{text}</div>
        {image && (
          <div className="post__image">
            <img src={image} alt="tweet" />
          </div>
        )}
        <div className="post__footer">
          <ChatBubbleOutlineOutlinedIcon />
          <RepeatIcon />
          <FavoriteBorderIcon />
          <ShareIcon />
        </div>
      </div>
    </motion.div>
  );
}

export default Post;
