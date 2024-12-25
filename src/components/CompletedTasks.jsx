
import { ListGroup, Form } from "react-bootstrap"

export default function CompletedTasks({ completedTasks }) {
    return (
        <>
            <h3>Completed Tasks</h3>
            {!completedTasks.length && <p className="text-center my-3">No completed tasks</p>}
            <ListGroup className="mt-2">
                {completedTasks && completedTasks.map((task) => (
                    <ListGroup.Item key={task.id}>
                        <Form.Check
                            type="checkbox"
                            id="default-checkbox"
                            value={task.id}
                            label={task.name}
                            readOnly
                            checked={task.status === 'completed'}
                        />
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    )
}