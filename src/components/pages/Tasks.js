import styles from './Tasks.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from '../layout/Container'
import Taskform from './taskform'

function tasks() {
    const {id} = useParams()
    const [task, setTask] = useState([])
    const [showTaskForm, setShowTaskForm] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/tasks/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setTask(data)
            })
            .catch((err) => console.log(err))
    }, [id])
    function editPost(task){
        fetch(`http://localhost:5000/tasks/${id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
        .then(resp => resp.json())
        .then((data) =>{
            setTask(data)
            setShowTaskForm(false)
        })
        .catch((err) => console.log(err))
    }
    function toggleTaskForm(){
        setShowTaskForm(!showTaskForm)
    }
    return (
        <div className={styles.task_details}>
            <Container customClass="column">
                <div className={styles.details_container}>
                    <h1>Tarefa: {task.name}</h1>
                    <button className={styles.btn} onClick={toggleTaskForm}>
                        {!showTaskForm ? 'Editar Tarefa' : 'Fechar'}
                    </button>
                    {!showTaskForm ? (
                        <div className={styles.task_info}>
                            <p>
                                <span>Nome:</span> {task.name}
                            </p>
                            <p>
                                <span>Descrição:</span> {task.description}
                            </p>
                        </div>
                    ):(
                        <div className={styles.task_info}>
                            <Taskform handleSubmit={editPost}
                            btnText="Concluit edição"
                            taskData={task}/>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default tasks