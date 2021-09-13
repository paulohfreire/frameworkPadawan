import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import api from "../../api/api";


const Posts = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('posts').then(({ data }) => {
      setPosts(data)
    });
  }, []);

  return (
    <div id="page-posts">
      <header>
        <Link to="/">
          Home
        </Link>
        <Link to="/albuns">
          Albuns
        </Link>
        <Link to="/todos">
          TO-DOs
        </Link>
      </header>
      <div id="posts">
        <h1>Postagens</h1>
        <div className="field">
          <ul className="items-post">
            {posts.map(posts => (
              <li key={posts.id}>
                <h3>{posts.title}</h3>
                <hr />
                <p>{posts.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Posts