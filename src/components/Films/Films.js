import React, { Component } from "react";
import Slider from "react-slick";
import charactersData from "./../../data/filmsData";
import DAL from "./../../services/DAL";
import Card from "./../Card/Card";
import Preloader from "./../Preloader/Preloader";
import FilmForm from "./Films-form/Films-from";
import "./Films.css";

class Films extends Component {
  static sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  state = {
    characters: null,
    charactersInfo: [],
    uploadedData: false,
    isPreloaderOff: true,
    transformCharacters: [],
    episode: null,
    episodeTitle: null,
  };

  setCharacterImage = (character) => {
    const imgData = charactersData;
    const defaultCharacter = imgData.find(
      (item) => item.name === "Default character"
    );
    const selectedImg = imgData.find((item) => item.name === character.name);
    character["imgSrc"] = selectedImg.src || defaultCharacter.src;
  };

  cardRequest = (characters) => {
    characters.forEach(async (character) => {
      const singleCharacter = await DAL.getSingleCharacterInfo(character);
      this.setState({
        charactersInfo: [...this.state.charactersInfo, singleCharacter],
      });
      this.addCharactersData(singleCharacter);
    });
  };

  addCharactersData = (character) => {
    const currentCharacter = character;
    this.setCharacterImage(currentCharacter);
    this.setState({
      transformCharacters: [
        ...this.state.transformCharacters,
        currentCharacter,
      ],
    });
  };

  getCharacters = async (el) => {
    this.setState({
      isPreloaderOff: false,
    });
    const response = await DAL.getFilm(el);
    this.setState({
      characters: response.characters,
      episode: response.episode_id,
      uploadedData: true,
      isPreloaderOff: true,
      episodeTitle: response.title,
    });
    this.cardRequest(this.state.characters);
  };

  render() {
    const charactersCards = this.state.charactersInfo.map((item) => {
      return <Card key={item.created} {...item} />;
    });

    return (
      <div className="films">
        {!this.state.isPreloaderOff && <Preloader />}

        {!this.state.uploadedData && (
          <FilmForm getCharacters={this.getCharacters} />
        )}

        {this.state.uploadedData && (
          <div>
            <div className="episode-info">
              <p>Картки героїв із {this.state.episode} епізоду Зоряних Війн.</p>
              <h2 className="episode-title">{this.state.episodeTitle}</h2>
            </div>
            <Slider {...this.sliderSettings}>{charactersCards}</Slider>
          </div>
        )}
      </div>
    );
  }
}

export default Films;
