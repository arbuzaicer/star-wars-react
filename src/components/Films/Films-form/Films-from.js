import React from "react";
import styles from './Films-form.module.css'

const FilmForm = (props) => {
        return (
            <div id="form" className={styles.form__body}>
                <h2 className={styles.form__header}>Пошук персонажів по епізоду</h2>
                <div className={styles.form}>
                    <div className={styles['input-box']}>
                        <input id='someID' className={styles.form__input} type="number" required=" " min={0}
                               max={11}/>
                        <label>Номер епізоду (1-11)</label>
                    </div>
                </div>
                <button className={styles.submit} onClick={() => {
                    props.getCharacters(document.getElementById('someID').value);
                }}>Отримати інформацію
                </button>
            </div>
        )

};

export default FilmForm;