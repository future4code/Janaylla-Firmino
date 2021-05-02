import React, { useLayoutEffect, useState, useContext } from 'react'
import { goToLogin } from '../../router/coordinator'
import { DivConteiner, Posts, PostAddIcon, OrdenaFeed, OrdenaLink } from './styled'
import { useHistory } from 'react-router-dom'
import Post from '../../components/cardPost/cardPost'

import CardAddPost from '../../components/cardAddPost/cardAddPost'
import Header from '../../components/header/header'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { red, orange, lime, lightGreen, green, cyan, indigo, pink, purple } from '@material-ui/core/colors';
import { Add } from '@material-ui/icons'

let listColor = []
export default function Feed() {
  const history = useHistory();
  const { postsGlobal, token } = useContext(GlobalStateContext);
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
    let postUpdate = [...postsGlobal.currentPosts]
    postUpdate.unshift(postFake)
    postsGlobal.setCurrentPosts([...postUpdate])
    setOpen(false)
  }
  const logOut = () => {
    window.localStorage.removeItem('user');
    goToLogin(history)
  }
  const FilterSearch = (posts) => {
    return  posts.filter((a) =>  !search || a.username === search);
  }
  const FilterSort = (posts) => {
    // posts = FilterSearch(posts)
    switch (sort) {
      case "feed":
        return posts;
      case "maisCurtidos":
        return posts.sort((a, b) => b.votesCount -  a.votesCount)
      case "curti":
        return posts.filter((post) => post.userVoteDirection === 1);
      case "recentes":
        return posts.sort((a, b) => b.createdAt - a.createdAt);
    }
  }
 console.log("search", search)
  const onChangeSearch = (e) => {
    e && setSearch(e.target.value)
  }

  const postFilterSort = postsGlobal.currentPosts? FilterSort(postsGlobal.currentPosts): []
  return <DivConteiner>

    <Header onClickButton={() => logOut()} textButton={"logout"} search={search} 
    onChangeSearch={ onChangeSearch}
    />
    {<CardAddPost
      postFake={postFake}
      update={postsGlobal.getPosts}
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

  </DivConteiner>
}