import styles from './Home.module.css'
import savings from '../img/Logo.png'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Notes</span></h1>
            <p>Gerencie suas tarefas do cotidiano com facilidade</p>
            <LinkButton to="/Newtask" text="Criar Tarefa"/>
            <img src={savings} alt="Notes"/>
        </section>
    )
}

export default Home