import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export function Greetings() {
    return (
        <>
            <div className={styles.greetings}>
                <h1>Hey there! Here's my Pokedex!</h1>
            </div>
            <Link to={`/list`} className={styles.anchor}>
                Click here to access
            </Link>
        </>
    )
}
