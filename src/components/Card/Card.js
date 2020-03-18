import React from 'react';
import styles from './Card.module.css'

const Card = (props) => {

        return (
        <div className={styles['item-card']}>
            <div className={styles['item-card__img']}>
                <img className={styles['item-img']} src={props.imgSrc} alt=""/>
            </div>
            <div className={styles['item-card_info']}>
                <div className={styles['item-card_name']}>
                    {props.name}
                </div>
                {props.birth_year && <p>Рік народження: {props.birth_year}</p>}
                {props.gender &&
                <p>Стать:
                    {(props.gender === 'male') && <span>чоловіча</span>}
                    {(props.gender === 'female') && <span>жіноча</span>}
                    {(props.gender === 'n/a') && <span>невизначено</span>}
                </p>}
                {props.height && <p>Зріст: {props.height} см</p>}
                {props.mass && <p>Вага: {props.mass} кг</p>}
                {props.diameter && <p>Діаметр: {props.diameter} км</p>}
                {props.orbital_period && <p>Орбітальний період: {props.orbital_period}</p>}
                {props.terrain && <p>Місцевість: {props.terrain}</p>}
            </div>
        </div>
    )
};

export default Card;