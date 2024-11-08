import NotFound from './NotFound';
import Task from './Task';

const TaskList = (props) => {

    const { taskList, heading, updateList } = props;

    return (
        <div className="task-list">
            <h2 className='task-list-heading'>{ heading }</h2>

            { taskList.length === 0 ? <NotFound message="No tasks yet"/> : taskList?.map( task => {
                return <Task 
                        taskId={task.id}
                        task={task.task}
                        deadLine={task.deadline}
                        isCompleted={task.completed}
                        key={task.id}
                        updateTask={updateList}
                    />
            })}
            
        </div>
    );
}

export default TaskList;