import styles from './TaskCard.module.css'
import { useEffect, useState } from "react";
import {BsPencil, BsFillTrashFill, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const API = "http://localhost:5000";

function TaskCard({id, name, description, handleRemove}) {
    const [tasks, setTodos] = useState([]);
    useEffect(() => {
        const loadData = async () => {
          const res = await fetch(API + "/tasks")
            .then((res) => res.json())
            .then((data) => data)
            .catch((err) => err);
          setTodos(res);
        };
        loadData();
    }, []);
    const handleDone = async (tasks) => {
        tasks.done = !tasks.done;
        const data = await fetch(API + "/tasks/" + tasks.id, {
          method: "PUT",
          body: JSON.stringify(tasks),
          headers: {
            "Content-Type": "application/json",
          },
        });
        setTodos((prevState) =>
          prevState.map((t) => (t.id === data.id ? (t = data) : t))
        );
    };
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
                    <BsPencil/> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
                <span onClick={() => handleDone(tasks)}>
                    {!tasks.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
                </span>
            </div>
        </div>
    )
}

export default TaskCard