import { Container } from "react-bootstrap";
import TaskForm from "./TaskForm";
import { useState } from "react";
import TaskItems from "./TaskItems";
export default function Todo() {

    const [tasks, setTasks] = useState([]);

    const addTask = (item) => {
        const newTask = {
            id:  tasks.length + 1,
            name: item,
            status: 'active',
        };
        setTasks([...tasks, newTask]);
    }

    const updateTask = (id, status) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === parseInt(id)) {
                task.status = status;
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <Container>
            <div className="todo-header-wrapper">
                <h2>TODO List</h2>
                <h3>Add Item</h3>
                <TaskForm className="add-task" addTask={addTask} />
            </div>
            <div className="todo-task-wrapper">
                <TaskItems tasks={tasks} updateTask={updateTask}/>
            </div>
        </Container>
    );
}
