import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../img/tarefas_logo.png'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="note" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/Task'>Tarefas</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/Newtask'>Nova Tarefa</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar