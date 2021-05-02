import React, { useState, useEffect } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { useGet } from '../hooks/hooksAxio'

export const GlobalState = (props) => {
  const token = JSON.parse(window.localStorage.getItem('user'))
  const [posts, requirePosts, loadingPosts, setPosts] = useGet([]);
  const [post, requirePost, loadinPost] = useGet();
  const [currentPosts, setCurrentPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    setCurrentPosts(posts)
  }, [posts]);

  useEffect(() => {
    if(loadinPost && post){
    const index = posts.findIndex(x => x.id === post.id)
    if(index > -1){
      let postUpdate = [...currentPosts]
      postUpdate[index] = post;
      console.log("posta update", postUpdate)
      setCurrentPosts([...postUpdate])
    }
    }
  }, [loadinPost])

  const getPosts = () => {
    token && token.token && requirePosts(token.token, "posts", "/posts");
  };

  const getPost = (idPost) => {
    token && token.token && requirePost(token.token, "post", `/posts/${idPost}`)
  };

  const postsGlobal = {posts, getPosts, post, getPost, currentPosts, setCurrentPosts};

  return (
    <GlobalStateContext.Provider value={{ postsGlobal, token }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
