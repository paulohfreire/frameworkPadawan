import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div id="home">
      <div className="content">
        <main>
          <h1>Página inicial Framework Padawans</h1>

          <Link to="/albuns">
            <strong>Acessar Album</strong>
          </Link>
          <Link to="/posts">
            <strong>Acessar Postagens</strong>
          </Link>
          <Link to="/todos">
            <strong>Acessar To-do</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
