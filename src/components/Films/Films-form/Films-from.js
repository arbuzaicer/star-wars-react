import React from "react";
import styles from './Films-form.module.css'
import DAL from './../../../services/DAL'
import Card from "../../Card/Card";

const FilmForm = () => {

    return (
        <>
            <div id="form" className={styles.form__body}>
                <h2 className={styles.form__header}>Пошук персонажів по епізоду</h2>
                <div className={styles.form}>
                    <div className={styles['input-box']}>
                        <input id='someID' className={styles.form__input} type="number" required=" " min={0} max={11}/>
                        <label>Номер епізоду (1-11)</label>
                    </div>
                    <button className={styles.submit} onClick={ async () => {
                        const filmInfo = await DAL.getFilm(document.getElementById('someID').value)
                            .then(data=> {
                               return data.characters
                            });
                        filmInfo.map(card => { /*Done today on map method*/
                            console.log(card)
                        });
                        document.getElementById('form').style.display = 'none';
                    }}>Отримати інформацію
                    </button>
                </div>
            </div>
        </>
    )
};

export default FilmForm;