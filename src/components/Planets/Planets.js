import React, {Component} from "react";
import DAL from "../../services/DAL";
import styles from './Planets.module.css'
import Preloader from "../Preloader/Preloader";
import Card from "../Card/Card";
import Slider from 'react-slick';

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
                this.setState({
                    next: data.next,
                    previous: data.previous,
                    planets: data.results,
                    isPreloaderOff: true,
                    uploadedData: true
                })
            });
    }

    getNextPlanetsList() {
        this.setState({
            isPreloaderOff: false,
            uploadedData: false
        });
        DAL.getSelectedPlanets(this.state.next)
            .then(data => {
                this.setState({
                    next: data.next,
                    previous: data.previous,
                    planets: data.results,
                    isPreloaderOff: true,
                    uploadedData: true
                })
            })
    }

    getPrevPlanetsList() {
        this.setState({
            isPreloaderOff: false,
            uploadedData: false
        });
        DAL.getSelectedPlanets(this.state.previous)
            .then(data => {
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
                                        return <Card planets={'Planets'} key={item.created} {...item}/>
                                    })
                                }
                            </Slider>
                        </div>
                    </div>

                }

                <div className={styles['buttons-section']}>
                    {this.state.previous && <button id={styles.prev} onClick={() => this.getPrevPlanetsList()}
                                                    className={styles.button}>Prev</button>}
                    {this.state.next && <button id={styles.next} onClick={() => this.getNextPlanetsList()}
                                                className={styles.button}>Next</button>}
                </div>
            </>
        )
    }
};

export default Planets;