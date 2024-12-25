import ActiveTasks from "./ActiveTasks";
import CompletedTasks from "./CompletedTasks";

function TaskItems({ tasks, updateTask, removeTask }) {
    const completedTasks = tasks.filter((task) => task.status === 'completed');
    const activeTasks = tasks.filter((task) => task.status === 'active');

    return (
        <>
            <ActiveTasks activeTasks={activeTasks} updateTask={updateTask} removeTask={removeTask}/>
            <CompletedTasks completedTasks={completedTasks} />
        </>
    );
}

export default TaskItems;