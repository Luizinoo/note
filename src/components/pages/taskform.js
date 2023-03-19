import { useState } from 'react'
import Input from './form/input'
import SubmitButton from './form/SubmitButtons'
import styles from './taskform.module.css'

function Taskform({handleSubmit, btnText, taskData}){
    const [task, setTask] = useState(taskData || {})
    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(task)
    }

    function handleChange(e){
        setTask({ ...task, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input
            type="text"
            text="Nome da tarefa"
            name="name"
            placeholder="Insira o nome da tarefa"
            handleOnChange={handleChange}
            value={task.name ? task.name : ''}
            />
            <Input
            type="text"
            text="Descrição da tarefa"
            name="description"
            placeholder="Descrição"
            handleOnChange={handleChange}
            value={task.description ? task.description : ''}
            />
            <Input done={false}/>
            <SubmitButton text={btnText} />
        </form>
    )
}

export default Taskform