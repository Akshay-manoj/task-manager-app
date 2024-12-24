import ActiveTasks from "./ActiveTasks";
import CompletedTasks from "./CompletedTasks";

function TaskItems({ tasks, updateTask }) {
    const completedTasks = tasks.filter((task) => task.status === 'completed');
    const activeTasks = tasks.filter((task) => task.status === 'active');

    return (
        <>
            <ActiveTasks activeTasks={activeTasks} updateTask={updateTask}/>
            <CompletedTasks completedTasks={completedTasks} />
        </>
    );
}

export default TaskItems;