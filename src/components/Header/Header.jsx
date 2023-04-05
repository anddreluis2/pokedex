import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Link to={`/`}>
      <button>Home</button>
      </Link>
      <div className={styles.wrapper}>
      <h1>Pokedex</h1>
      </div>
    </header>
  );
}