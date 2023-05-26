import React from "react";
import "./App.css";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { Route, Routes } from "react-router-dom";
import { Feed } from "./components/Feed/Feed";
import SinglePost from "./components/SinglePost/SinglePost";
import { AddPostForm } from "./components/Forms/AddPostForm";
import { LoginForm } from "./components/Forms/LoginForm";
import { RegisterForm } from "./components/Forms/RegisterForm";
import Home from "./components/Home";

function App() {
  const app = initializeApp(firebaseConfig);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="feed" element={<Feed />}></Route>
      <Route path="posts/:id" element={<SinglePost />}></Route>
      <Route path="addpost" element={<AddPostForm />}></Route>
      <Route path="login" element={<LoginForm />}></Route>
      <Route path="register" element={<RegisterForm />}></Route>
    </Routes>
  );
}

export default App;
