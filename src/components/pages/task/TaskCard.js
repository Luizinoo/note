import styles from './TaskCard.module.css'
import { BsPencil, BsFillTrashFill, BsBookmarkCheckFill, BsBookmarkCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function TaskCard({ id, name, description, handleRemove }) {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return (
        <div className={styles.task_card}>
            <h4>{name}</h4>
            <p>
                <span></span> {description}
            </p>
            <div className={styles.task_card_actions}>
                <Link to={`/task/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
                <input type="checkbox" className={styles.task_card_check}></input>
            </div>
        </div>
    )
}

export default TaskCard