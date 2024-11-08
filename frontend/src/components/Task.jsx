import { useState } from "react";
import { changeStatus } from "../utils/services";
import moment from "moment";
import { Link } from "react-router-dom";


const Task = (props) => {
    const { taskId, task, deadLine, isCompleted, updateTask } = props;
    const [complete, setComplete] = useState(isCompleted);

    async function checkboxClick() {
        setComplete(!complete);
        try {
            const data = await changeStatus(taskId);
            if(data.success) {
                console.log(data.message);
            }
            updateTask();
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="task" id={taskId}>
            <div>
                <label htmlFor="checkbox" className="label-checkbox">
                    <input type="checkbox" className="checkbox" id="checkbox" onChange={checkboxClick} checked={complete}></input>
                </label>

                <Link to={'/task/' + taskId}>
                    <span className={`${ complete ? "task-title-checked" : "task-title" }`}> { task } </span>
                </Link>

            </div>
            <span className="task-deadline">before { moment(deadLine).format('MMM Do YY, H:mm') }</span>
        </div>
    );
}

export default Task;