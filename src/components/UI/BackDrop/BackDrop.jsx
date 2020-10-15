import React from 'react';
import styles from './BackDrop.module.css';


const BackDrop = (props) =>{
    return(
        <div className={styles.backDrop} onClick={props.onClick}/>
    )
}


export default BackDrop