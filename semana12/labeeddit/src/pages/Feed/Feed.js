import React, { useLayoutEffect, useState, useEffect } from 'react'
import { goToLogin } from '../../router/coordinator'
import { DivConteiner, Posts, PostAddIcon, OrdenaFeed, OrdenaLink } from './styled'
import { useHistory } from 'react-router-dom'
import Post from '../../components/cardPost/cardPost'

import CardAddPost from '../../components/cardAddPost/cardAddPost'
import Header from '../../components/header/header'
import { red, orange, lime, lightGreen, green, cyan, indigo, pink, purple } from '@material-ui/core/colors';
import { Add } from '@material-ui/icons'
import { useGet } from '../../hooks/hooksAxio'
import Loading from '../../components/loading/loading'

let listColor = []
export default function Feed() {
  
  const token = JSON.parse(window.localStorage.getItem('user'))
  const history = useHistory();
  const [posts, requirePosts, loadingPosts, setPosts] = useGet([]);
  const color = [red, orange, lime, lightGreen, green, cyan, indigo, pink, purple]
  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState("feed")
  const [search, setSearch] = useState("")
  const nRandon = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randonColor = () => {
    return color[nRandon(0, 8)][nRandon(3, 9) * 100];
  }
  const getPosts = () => {
    token && token.token && requirePosts(token.token, "posts", "/posts");
  };
  useEffect(() => {
    getPosts();
  }, []);

  useLayoutEffect(() => {
    if (!window.localStorage.getItem('user')) {
      goToLogin(history);
    }
  })

  const postFake = (post) => {
    const postFake = {
      userVoteDirection: 0,
      id: "request",
      text: post.text,
      commentsCount: 0,
      title: post.title,
      username: token.user.username,
      votesCount: 0,
    }
    let postUpdate = [...posts]
    postUpdate.unshift(postFake)
    setPosts([...postUpdate])
    token && token.token && requirePosts(token.token, "posts", "/posts");
    setOpen(false)
  }
  const logOut = () => {
    window.localStorage.removeItem('user');
    goToLogin(history)
  }
  const notSpecial = (str) => {
    str = str.toUpperCase()
    str = str.replace(/[ÀÁÂÃÄÅ]/,"A");
    str = str.replace(/[àáâãäå]/,"a");
    str = str.replace(/[ÈÉÊË]/,"E");
    str = str.replace(/[Ç]/,"C");
    str = str.replace(/[ç]/,"c");

    return str.replace(/[^a-z0-9]/gi,''); 
  }
  const FilterSearch = (pos) => {
    return pos.filter((a) =>  !search || 
    notSpecial(a.username).includes(notSpecial(search)) ||
    notSpecial(a.title).includes(notSpecial(search)) || 
    notSpecial(a.text).includes(notSpecial(search))
    )
    
  }
  const FilterSort = (posts) => {
    switch (sort) {
      case "feed":
        return FilterSearch(posts);
      case "maisCurtidos":
        return posts.sort((a, b) => b.votesCount -  a.votesCount)
      case "curti":
        return posts.filter((post) => post.userVoteDirection === 1);
      case "recentes":
        return posts.sort((a, b) => b.createdAt - a.createdAt);
    }
  }
  const onChangeSearch = (e) => {
    e && setSearch(e.target.value)
  }

  const postFilterSort = posts? FilterSort(posts): []
  return <DivConteiner>

    <Header onClickButton={() => logOut()} textButton={"logout"} search={search} 
    onChangeSearch={ onChangeSearch}
    />
    {<CardAddPost
      postFake={postFake}
      update={getPosts}
      open={open}
      setOpen={setOpen}
    />}

    <OrdenaFeed aria-label="breadcrumb">
      <OrdenaLink
        color={sort === "feed" ? "textPrimary" : "inherit"}
        onClick={() => setSort("feed")}>
        Feed
      </OrdenaLink>
      <OrdenaLink
        color={sort === "maisCurtidos" ? "textPrimary" : "inherit"}
        onClick={() => setSort("maisCurtidos")}
      >
        Mais Curtidos
      </OrdenaLink>
      <OrdenaLink
        color={sort === "curti" ? "textPrimary" : "inherit"}
        onClick={() => setSort("curti")}
      >
        Curtidos
      </OrdenaLink>
      <OrdenaLink
        color={sort === "recentes" ? "textPrimary" : "inherit"}
        onClick={() => setSort("recentes")}
      >
        Mais recentes
      </OrdenaLink>
    </OrdenaFeed>

    <PostAddIcon color="primary" aria-label="scroll back to top" onClick={() => setOpen(true)}>
      <Add />
    </PostAddIcon>
    {(loadingPosts && posts) ? 
    <Loading/>:
    <>
    <Posts>
      {postFilterSort.map((item) => {
        let colorU = randonColor();
        const index = listColor.findIndex((i) => { return i[0] === item.username });
        if (index === -1) {
          listColor.push([item.username, colorU])
        }
        else {
          colorU = listColor[index][1]
        }
        return (<>
          <Post post={item} token={token} color={colorU} />
        </>
        )
      })
      }
    </Posts>
</>
    }
  </DivConteiner>
}