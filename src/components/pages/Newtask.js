import { useNavigate } from 'react-router-dom'
import Taskform from './taskform'
import styles from './Newtask.module.css'

function Newtask(){
    const navegate = useNavigate();
    function createPost(task){
        fetch('http://localhost:5000/tasks',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })
        .then((resp) => resp.json())
        .then((data) =>{
            console.log(data)
            // redirect
            navegate('../Task', {message: 'Tarefa criada com sucesso!'})
        })
        .catch((err) => console.log(err))
    }
    return(
        <div className={styles.newtask_container}>
            <h1>Criar Tarefa</h1>
            <p>Crie suas tarefas para depois gerencia-las com facilidade</p>
            <Taskform handleSubmit={createPost} btnText="Criar Tarefa"/>
        </div>
    )
}

export default Newtask