import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiArrowDownLeft } from "react-icons/fi";
import api from "../../api/api";

const Albums = () => {
  const { id: galleryId } = useParams();

  const [imagens, setImagens] = useState("");

  useEffect(() => {
    api.get(`albums/${galleryId}/photos`).then(({ data }) => {
      setImagens(data);
    });
  }, [galleryId]);

  return (
    <div id="page-albums">
      <header>
        <Link to="/">
          <FiArrowDownLeft />
          Home
        </Link>
        <Link to="/posts">Postagens</Link>
        <Link to="/todos">TO-DOs</Link>
      </header>
      <form>
        <div id="album-header">
          <h1>Imagens</h1>
          <Link to="/albuns">
            <FiArrowDownLeft /> Voltar
          </Link>
        </div>

        <fieldset>
          <ul className="items-grid">
            {imagens.map((imagem) => (
              <li key={imagem.id}>
                <img src={imagem.thumbnailUrl} alt={imagem.title} />
                <span>{imagem.title}</span>
              </li>
            ))}
          </ul>
        </fieldset>
      </form>
    </div>
  );
};

export default Albums;
