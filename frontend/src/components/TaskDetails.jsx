import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTaskById } from "../utils/services";
import moment from "moment";
import DeleteTask from "./DeleteTask";

const TaskDetails = () => {
    const [task, setTask] = useState();
    const { taskId } = useParams();

    useEffect(() => {
        getTaskDetails();
    }, [taskId]);

    async function getTaskDetails() {
        try {
            const data = await getTaskById(taskId);
            if(data?.success) {
                setTask(data?.data);
            } else {
                console.log(data?.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    if(!task) {
        return <div>loading...</div>;
    }

    return (
        <div className="task-details">
            <div>
                <h2 className="task-title">{task.task}</h2>
                <p className="task-description">{task.description}</p>
                <label>on or before:</label>
                <span>{ moment(task.deadline).format('MMM Do YY, H:mm') }</span>
                <br />
                <span id="status" className={ task.completed ? "completed" : "yet-to-do" }>{ task.completed ? "completed" : "yet to do" }</span>
                <div className="task-actions">
                    <Link to={`/task/${task.id}/update`} state={{ task: task.task, taskId: task.id, deadLine: task.deadline, description: task.description}}>
                        <button className="update-btn">Update</button>
                    </Link>
                    <DeleteTask taskId={task.id} />
                </div>
            </div>
        </div>
    );
}

export default TaskDetails;