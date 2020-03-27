import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
  <div className="home-container">
    <h2>
      Привіт - це додаток про{" "}
      <a
        href="https://uk.wikipedia.org/wiki/%D0%97%D0%BE%D1%80%D1%8F%D0%BD%D1%96_%D0%B2%D1%96%D0%B9%D0%BD%D0%B8"
        target="_blank"
      >
        "Зоряні Війни"
      </a>
    </h2>
    <div className="description">
      <p>
        Даний додаток використовує{" "}
        <a href="https://swapi.co/" target="_blank">
          API SWAPI
        </a>
        , яка містить велику кількість інформації про пресонажів, планети,
        літаючі засоби та інші дані.
      </p>
      <p>
        На даний момент в додатку доступно 2 сторінки для використання та
        тестування:
      </p>
      <ul className="api-items">
        <Link to="/films">Фільми</Link>
        <Link to="/planets">Планети</Link>
      </ul>
    </div>
  </div>
);

export default Home;
