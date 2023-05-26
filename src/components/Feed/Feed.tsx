import React, { useState, useEffect } from "react";
import "./feed.scss";
import { AddPostForm } from "../Forms/AddPostForm";
import { SinglePost } from "../SinglePost/SinglePost";

const Posts = fetch("https://dummyjson.com/posts")
  .then((res) => res.json())
  .then(console.log);

export const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <AddPostForm />
        <br />
        <SinglePost />
      </div>
    </div>
  );
};
