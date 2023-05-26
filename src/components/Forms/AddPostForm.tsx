import React, { useState, useEffect } from "react";
import "./addPostForm.scss";
import {} from "@mui/icons-material";
import Icon from "@mdi/react";
import { mdiTypewriter } from "@mdi/js";

export const AddPostForm = () => {
  return (
    <div className="addPost">
      <div className="addPostWrapper">
        <div className="addPostTop">
          <Icon className="typewriter" path={mdiTypewriter} size={1} />
          <input placeholder="What's on your mind?" className="addPostInput" />
        </div>
        <hr className="shareHr" />
        <div className="addPostBttm">
          <button className="shareBtn">Share</button>
        </div>
      </div>
    </div>
  );
};
