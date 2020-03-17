import React, {Component} from 'react';
import FilmForm from './Films-form/Films-from';
import styles from './Films.module.css'
import DAL from './../../services/DAL'
import Card from './../Card/Card';
import Preloader from '../Preloader/Preloader';
import Slider from 'react-slick';

class Films extends Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: null,
            charactersInfo: [],
            uploadedData: false,
            isPreloaderOff: true
        }
    }

    cardRequest(arr) {
        arr.map(character => {
            DAL.getSingleCharacterInfo(character)
                .then(data => {
                    this.setState({
                        charactersInfo: [
                            ...this.state.charactersInfo,
                            data
                        ]
                    })
                })
        });
    }

    async getCharacters(el) {
        this.setState({
            isPreloaderOff: false
        });
        await DAL.getFilm(el)
            .then(data => {
                this.setState({
                    characters: data.characters,
                    uploadedData: true,
                    isPreloaderOff: true
                })
            });
        this.cardRequest(this.state.characters);
        console.log(this.state.charactersInfo)
    }


    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className={styles.films}>
                {
                    !this.state.isPreloaderOff &&
                    <Preloader/>
                }

                {
                    !this.state.uploadedData &&
                    <div className={styles.films}>
                        <FilmForm getCharacters={this.getCharacters.bind(this)}/>
                    </div>
                }

                {
                    this.state.uploadedData &&
                        <div>
                            <Slider {...settings}>
                                {this.state.charactersInfo.map(item => {
                                        return <Card key={item.created}
                                                     name={item.name}
                                                     birth_year = {item.birth_year}
                                                     gender = {item.gender}
                                                     height = {item.height}
                                                     mass = {item.mass}
                                        />
                                    })
                                }
                            </Slider>
                        </div>
                }
            </div>
        )
    }
};

export default Films;