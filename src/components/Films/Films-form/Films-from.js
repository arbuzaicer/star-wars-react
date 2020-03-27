import React from "react";
import "./Films-form.css";

const FilmForm = ({ getCharacters }) => (
  <div id="form" className="form__body">
    <h2 className="form__header">Пошук персонажів по епізоду</h2>
    <div className="form">
      <div className="input-box">
        <input
          id="someID"
          className="form__input"
          type="number"
          required=" "
          min={0}
          max={7}
        />
        <label>Номер епізоду (1-7)</label>
      </div>
    </div>
    <button
      className="submit"
      onClick={() => {
        getCharacters(document.getElementById("someID").value);
      }}
    >
      Отримати інформацію
    </button>
  </div>
);

export default FilmForm;
