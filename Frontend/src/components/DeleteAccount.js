import React from 'react'
import styles from './delete.module.css';


// open new modal when delete account is pressed, api isn't working so need to wait for that for testing
export default function DeleteAccount(props) {
    return (
        <div>
            <div className={styles.background} onClick={props.hideDelete}> </div>
            <div className={styles.deletebox}> 
                <div onClick={props.onDelete} className={styles.delete}> Delete Account </div>
            </div>
        </div>
    )
}
