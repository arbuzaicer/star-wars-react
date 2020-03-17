import React from 'react';
import FilmForm from './Films-form/Films-from';
import styles from './Films.module.css'

const Films = () => {
    return (
        <div className={styles.films}>
            <FilmForm/>
        </div>
    )
};

export default Films;