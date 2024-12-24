
import { ListGroup, Form } from "react-bootstrap"

export default function ActiveTasks({ activeTasks, updateTask }) {

    const updateTaskComplete = (e) => {
        updateTask(e.target.value, e.target.checked ? 'completed' : 'active');
    }

    return (
        <>
            <h3>Active Tasks</h3>
            {!activeTasks.length && <p className="text-center my-3">No active tasks</p>}
            <ListGroup className="mt-2">
                {activeTasks && activeTasks.map((task) => (

                    <ListGroup.Item key={task.id}>
                        <Form.Check
                            type="checkbox"
                            id="default-checkbox"
                            value={task.id}
                            label={task.name}
                            onChange={updateTaskComplete}
                        />
                    </ListGroup.Item>

                ))}
            </ListGroup>
        </>
    )
}