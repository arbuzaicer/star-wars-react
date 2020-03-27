import React, { Component } from "react";
import Slider from "react-slick";
import DAL from "../../services/DAL";
import planetsData from "../../data/planetsData";
import Preloader from "../Preloader/Preloader";
import Card from "../Card/Card";
import "./Planets.css";

class Planets extends Component {
  state = {
    next: null,
    previous: null,
    planets: [],
    isPreloaderOff: false,
    uploadedData: false,
  };

  componentDidMount = async () => {
    const planets = await DAL.getDefaultPlanets();
    const transformedPlanets = await this.setPlanetImage(planets.results);
    this.setState({
      next: planets.next,
      previous: planets.previous,
      planets: transformedPlanets,
      isPreloaderOff: true,
      uploadedData: true,
    });
  };

  setPlanetImage = async (planets) => {
    const planetsTemp = [...planets];
    const defaultPlanet = planetsData.find(
      (planet) => planet.name === "Default"
    );

    planetsTemp.forEach((item) => {
      const currentImg = planetsData.find((sin) => {
        return sin.name === item.name;
      });
      item["imgSrc"] = currentImg ? currentImg.src : defaultPlanet.src;
    });
    return planetsTemp;
  };

  getPlanetsList = async (list) => {
    this.setState({
      isPreloaderOff: false,
      uploadedData: false,
    });
    const planetList = await DAL.getSelectedPlanets(list);
    const planets = await this.setPlanetImage(planetList.results);
    this.setState({
      next: planetList.next,
      previous: planetList.previous,
      planets: planets,
      isPreloaderOff: true,
      uploadedData: true,
    });
  };

  render() {
    const sliderSettings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
    };

    return (
      <React.Fragment>
        {!this.state.isPreloaderOff && <Preloader />}

        {this.state.uploadedData && (
          <div>
            <div className="planets">
              <p className="header">
                Завантажено {this.state.planets.length} планет. Можна гортати
                картку мишкою або натиснути на кнопки нижче.
              </p>
              <Slider {...sliderSettings}>
                {this.state.planets.map((item) => {
                  return <Card key={item.created} {...item} />;
                })}
              </Slider>
            </div>
          </div>
        )}

        <div className="buttons-section">
          {this.state.previous && (
            <button
              id="prev"
              onClick={() => this.getPlanetsList(this.state.previous)}
              className="button"
            >
              Prev
            </button>
          )}
          {this.state.next && (
            <button
              id="next"
              onClick={() => this.getPlanetsList(this.state.next)}
              className="button"
            >
              Next
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Planets;
