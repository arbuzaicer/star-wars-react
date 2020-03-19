import React, {Component} from "react";
import DAL from "../../services/DAL";
import styles from './Planets.module.css'
import Preloader from "../Preloader/Preloader";
import Card from "../Card/Card";
import Slider from 'react-slick';
import {planetsImages} from "../../store/imgPlanetsData";

class Planets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next: null,
            previous: null,
            planets: [],
            isPreloaderOff: false,
            uploadedData: false
        }
    }

    componentDidMount() {
        DAL.getDefaultPlanets()
            .then(data => {
                const planets = this.setPlanetImage(data.results);
                this.setState({
                    next: data.next,
                    previous: data.previous,
                    planets: data.results,
                    isPreloaderOff: true,
                    uploadedData: true
                })
            });
    }

    setPlanetImage(planet) {
        const imgData = planetsImages;
        const defaultPlanet = planetsImages.filter(planet => planet.name === "Default");
        const selected = planet.forEach(item => {
            const currentImg = imgData.filter(sin => {
                return sin.name === item.name
            });
            item['imgSrc'] = currentImg.length > 0 ? currentImg[0].src : defaultPlanet[0].src;
        })

    }

    getPlanetsList() {
        this.setState({
            isPreloaderOff: false,
            uploadedData: false
        });
        DAL.getSelectedPlanets(this.state.next)
            .then(data => {
                const planets = this.setPlanetImage(data.results);
                this.setPlanetImage(data.results);
                this.setState({
                    next: data.next,
                    previous: data.previous,
                    planets: data.results,
                    isPreloaderOff: true,
                    uploadedData: true
                })
            })
    }

    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        };
        return (
            <>
                {!this.state.isPreloaderOff && <Preloader/>}

                {
                    this.state.uploadedData &&
                    <div>
                        <div className={styles.planets}>
                            <p className={styles.header}>Завантажено {this.state.planets.length} планет. Можна гортати
                                картку мишкою або натиснути на кнопки нижче.</p>
                            <Slider {...settings}>
                                {
                                    this.state.planets.map(item => {
                                        return <Card key={item.created} {...item}/>
                                    })
                                }
                            </Slider>
                        </div>
                    </div>

                }

                <div className={styles['buttons-section']}>
                    {this.state.previous && <button id={styles.prev} onClick={() => this.getPlanetsList()}
                                                    className={styles.button}>Prev</button>}
                    {this.state.next && <button id={styles.next} onClick={() => this.getPlanetsList()}
                                                className={styles.button}>Next</button>}
                </div>
            </>
        )
    }
}

export default Planets;