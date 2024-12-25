
import { ListGroup } from "react-bootstrap"
import ActiveTaskItem from "./ActiveTaskItem";

export default function ActiveTasks({ activeTasks, updateTask, removeTask }) {
    return (
        <>
            <h3>Active Tasks</h3>
            {!activeTasks.length && <p className="text-center my-3">No active tasks</p>}
            <ListGroup className="mt-2">
                {activeTasks && activeTasks.map((task) => (
                    <ActiveTaskItem
                        task={task}
                        key={task.id}
                        updateTask={updateTask}
                        removeTask={removeTask}
                    />
                ))}
            </ListGroup>
        </>
    )
}