import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../img/tarefas_logo.png'

function Navbar(){
    return(
        <nav class={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="note" />
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to='/Task'>Tarefas</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to='/Newtask'>Nova Tarefa</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar