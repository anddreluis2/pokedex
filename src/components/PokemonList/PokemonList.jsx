import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { getPokemon } from '../../services/getPokemons'
import { Link } from 'react-router-dom'

export function PokemonList() {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const getPokemons = await getPokemon()
            setPokemons(getPokemons)
        }
        loadData()
    }, [])

    console.log('teste', pokemons)
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h1>Lista</h1>
            </div>
            {pokemons?.map((pokemon) => {
                return <div className={styles.pokemonName}>{pokemon?.name}</div>
            })}
        </div>
    )
}
