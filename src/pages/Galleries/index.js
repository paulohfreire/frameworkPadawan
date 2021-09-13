import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FiArrowDownLeft } from 'react-icons/fi';
import api from "../../api/api";


const Galleries = () => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    api.get('albums').then(({ data }) => {
      setGalleries(data)
    });
  }, []);

  return (
    <div id="page-galleries">
      <header>
        <Link to="/">
          <FiArrowDownLeft />
         Home
        </Link>
        <Link to="/posts">
          Postagens
        </Link>
        <Link to="/todos">
          TO-DOs
        </Link>
      </header>
      <div id="galleries">
        <h1>Álbuns</h1>
        <div className="field">
          <ul className="items-grid">
            {galleries.map(gallery => (
              <Link to={`/album/${gallery.id}`} key={gallery.id}>
                <li>
                  <div className="gallery-icon"></div>
                  <span>{gallery.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>


    </div>
  );

}

export default Galleries;