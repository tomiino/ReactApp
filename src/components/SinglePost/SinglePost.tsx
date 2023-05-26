import React, { useState, useEffect } from "react";
import "./singlePost.scss";
import Icon from "@mdi/react";
import { mdiNoteText, mdiThumbUpOutline, mdiCommentTextOutline } from "@mdi/js";

export const SinglePost = () => {
  const [post, setPost] = useState([]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Icon path={mdiNoteText} size={1} />
            <span className="postUsername">Tom Hruby</span>
            <span className="postDate">5 mins ago</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey it's my post!</span>
        </div>
        <div className="postBttm">
          <div className="postBttmLeft">
            <Icon className="likeIcon" path={mdiThumbUpOutline} size={1} />
            <span className="likeCounter">52</span>
          </div>
          {/* <div className="postBttmRight">
            <Icon
              className="commentIcon"
              path={mdiCommentTextOutline}
              size={1}
            />
            <span className="comments">3 comments</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
