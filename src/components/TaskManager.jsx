import { Container } from "react-bootstrap";
import TaskForm from "./TaskForm";
import { useState } from "react";
import TaskItems from "./TaskItems";
export default function Todo() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Task 1',
            status: 'active',
        },
        {
            id: 2,
            name: 'Task 2',
            status: 'active',
        },
        {
            id: 3,
            name: 'Task 3',
            status: 'active',
        }
    ]);

    /**
     * On submit click, add the item to the list of tasks
     * @param {*} item 
     */
    const addTask = (item) => {
        const newTask = {
            id: tasks.length + 1,
            name: item,
            status: 'active',
        };
        setTasks([...tasks, newTask]);
    }

    /**
     * Update task status to completed.
     * @param {*} id 
     * @param {*} status 
     */
    const updateTask = (id, val, key) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === parseInt(id)) {
                task[key] = val;
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    /**
     * On delete button click, remove the task from list.
     * @param {*} taskId 
     */
    const removeTask = (taskId) => {
        const updatedTasks = tasks
            .filter((task) => task.id !== taskId)
            .map((task) => {

                if (task.id > taskId) {
                    task.id -= 1;
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
                <TaskItems
                    tasks={tasks}
                    updateTask={updateTask}
                    removeTask={removeTask}
                />
            </div>
        </Container>
    );
}
