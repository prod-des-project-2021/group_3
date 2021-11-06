import React from 'react'
import styles from './frontpage.module.css';
import Title from './Title.js';
import Caption from './Caption.js';
import Content from './Content.js';

export default function Frontpage(props) {
    return (
        <>
            <div className={styles.sections}>
                <div className={styles.sec1}>section 1</div>
                <div className={styles.sec2}>section 2</div>
                <div className={styles.sec3}>section 3</div>
                <div className={styles.sec4}>section 4</div>
            </div>
            <div className={styles.container}>
                <Title title='Welcome to the page'/>
                <Caption text ='Read down here what to do and what this is.'/>
                <Content text ='This is a welcome page and whatever, describing what you can do here and find.'/>
            </div>
        </>
    )
}
