import React, {Component} from 'react';
import FilmForm from './Films-form/Films-from';
import styles from './Films.module.css'
import DAL from './../../services/DAL'
import Card from './../Card/Card';
import Preloader from '../Preloader/Preloader';
import Slider from 'react-slick';
import {charactersImages} from '../../store/imgFilmsData'

class Films extends Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: null,
            charactersInfo: [],
            uploadedData: false,
            isPreloaderOff: true,
            episode: null,
            episodeTitle:null
        }
    }

    setCharacterImage(character) {
        const imgData = charactersImages;
        const defaultCharacter = imgData.filter(item=>item.name==='Default character');
        const selectedImg = imgData.filter(item=>item.name===character.name);

        character['imgSrc'] = selectedImg.length>0 ? selectedImg[0].src : defaultCharacter[0].src;
    }

    cardRequest(arr) {
        arr.map(character => {
            DAL.getSingleCharacterInfo(character)
                .then(data => {
                    this.setCharacterImage(data);
                    this.setState({
                        charactersInfo: [
                            ...this.state.charactersInfo,
                            data
                        ]
                    })
                })
        })
    }


    async getCharacters(el) {
        this.setState({
            isPreloaderOff: false
        });
        await DAL.getFilm(el)
            .then(data => {
                this.setState({
                    characters: data.characters,
                    episode: data.episode_id,
                    uploadedData: true,
                    isPreloaderOff: true,
                    episodeTitle: data.title
                })
            });
        this.cardRequest(this.state.characters);

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
                        <FilmForm getCharacters={this.getCharacters.bind(this)}/>
                }

                {
                    this.state.uploadedData &&
                    <div>
                        <div className={styles['episode-info']}>
                            <p>Картки героїв із {this.state.episode} епізоду Зоряних Війн.</p>
                            <h2 className={styles['episode-title']}>{this.state.episodeTitle}</h2>
                        </div>
                        <Slider {...settings}>
                            {this.state.charactersInfo.map(item => {
                                return <Card key={item.created} {...item}
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