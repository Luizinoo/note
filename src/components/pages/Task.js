import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Message from '../layout/Message'
import styles from './Task.module.css'
import Container from '../layout/Container'
import LinkButton from  '../layout/LinkButton'
import TaskCard from './task/TaskCard'

function Task() {
    const [tasks, setTasks] = useState([])
    const[taskMenssage, setTaskMenssage] = useState('')
    const location = useLocation()
    let message = ''
    if(location.state){
        message=location.state.message
    }
    useEffect(() => {
        fetch('http://localhost:5000/tasks',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setTasks(data)
            })
            .catch((err) => console.log(err))
    }, [])

    function  removeTask(id){
        fetch(`http://localhost:5000/tasks/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setTasks(tasks.filter((task) => task.id !== id))
                setTaskMenssage('Tarefa Removida com Sucesso')
            })
            .catch((err) => console.log(err))
    }


    return (
        <div className={styles.task_container}>
            <div className={styles.title_container}>
                <h1>Minhas Tarefas</h1>
                <LinkButton to="/Newtask" text="Criar Tarefa"/>
            </div>
            {message && <Message type="success" msg={message} />}
            {taskMenssage && <Message type="success" msg={taskMenssage} />}
            <Container customClass="start">
                {tasks.length > 0 && 
                    tasks.map((task) => (
                        <TaskCard
                            id={task.id}
                            name={task.name}
                            description={task.description}
                            key={task.id}
                            handleRemove={removeTask}
                        />
                    ))}
            </Container>
        </div>
    )
}

export default Task