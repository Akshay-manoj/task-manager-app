import { Button, Form, ListGroup } from "react-bootstrap";
import { useState } from "react";

export default function ActiveTaskItem({ task, index, updateTask, removeTask }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(task);

    /**
     * On Edit click, update the state value.
     */
    const onEditClick = () => {
        setIsEditing(!isEditing ? true : false);
    }

    /**
     * Function to remove the task
     * @param {*} id 
     */
    const deleteTask = (id) => {
        removeTask(id);
    }

    /**
     * On task name update
     */
    const saveTask = () => {
        updateTask(task.id, editTask.name, "name");
        setIsEditing(false);
    }
    return (
        <>
            <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
                {
                    !isEditing ? (
                        <Form.Check
                            type="checkbox"
                            id="default-checkbox"
                            value={task.id}
                            label={task.name}
                            role="button"
                            onChange={(e) => { updateTask(e.target.value, e.target.checked ? 'completed' : 'active', "status") }}
                        />
                    ) : (
                        <Form.Control
                            type="text"
                            value={editTask.name}
                            onChange={(e) => setEditTask({ ...editTask, name: e.target.value })}
                        />
                    )
                }
                <div className="btn-wrapper">
                    {
                        !isEditing ? (
                            <>
                                <Button type="button" onClick={() => onEditClick(task)}>Edit</Button>
                                &nbsp;
                                <Button type="button" onClick={() => deleteTask(task.id)}>Delete</Button>
                            </>
                        ) : (
                            <Button type="button" onClick={() => saveTask()}>Save</Button>
                        )
                    }</div>
            </ListGroup.Item>
        </>
    )
}