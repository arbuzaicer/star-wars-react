import React from 'react';
import styles from './Card.module.css'

const Card = (props) => {
    return (
        <div className={styles['character-card']}>
            <div className={styles['characters-card_name']}>
                {props.name}
            </div>
            <div className={styles['characters-card_info']}>
                    <p>Рік народження: {props.birth_year}</p>
                    <p>Стать:
                        {(props.gender==='male') && <span>чоловіча</span> }
                        {(props.gender==='female') && <span>жіноча</span> }
                        {(props.gender==='n/a') && <span>невизначено</span> }
                    </p>
                    <p>Зріст: {props.height} см</p>
                    <p>Вага: {props.mass} кг</p>
            </div>
        </div>
    )
};

export default Card;