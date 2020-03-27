import React from "react";
import "./Card.css";

const Card = ({
  imgSrc,
  name,
  birth_year,
  gender,
  height,
  mass,
  diameter,
  orbital_period,
  terrain,
}) => (
  <div className="item-card">
    <div className="item-card__img">
      <img className="item-img" src={imgSrc} alt="" />
    </div>
    <div className="item-card_info">
      <div className="item-card_name">{name}</div>
      {birth_year && <p>Рік народження: {birth_year}</p>}
      {gender && (
        <p>
          Стать:
          {gender === "male" && <span>чоловіча</span>}
          {gender === "female" && <span>жіноча</span>}
          {gender === "n/a" && <span>невизначено</span>}
        </p>
      )}
      {height && <p>Зріст: {height} см</p>}
      {mass && <p>Вага: {mass} кг</p>}
      {diameter && <p>Діаметр: {diameter} км</p>}
      {orbital_period && <p>Орбітальний період: {orbital_period}</p>}
      {terrain && <p>Місцевість: {terrain}</p>}
    </div>
  </div>
);

export default Card;
