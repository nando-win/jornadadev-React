import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  function handdleLike() {
    setLiked(!liked);
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__options" onClick={handdleLike}>
        {liked ? (
          <FavoriteBorderIcon fontSize="large" />
        ) : (
          <FavoriteIcon fontSize="large" />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__options">
        <p>
          <ChatIcon fontSize="large" />
        </p>
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__options">
        <p>
          <ShareIcon fontSize="large" />
        </p>
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;