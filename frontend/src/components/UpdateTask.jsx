import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateTask } from "../utils/services";

const UpdateTask = () => {
    const location = useLocation();
    const state = location.state;
    const now = new Date(state.deadLine);
    const dateString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const [task, setTask] = useState(state.task);
    const [deadline, setDeadline] = useState(dateString);
    const [description, setDescription] = useState(state.description);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const temDeadline = deadline + ":00.000+05:30";
        const body = { task, deadline: temDeadline, description };

        try {
            const response = await updateTask(state.taskId, body);
            if(response?.success) {
                navigate(-1);
            } else {
                console.log(response?.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="add-task">
            <div>
                <h2 className="add-task-heading">Update task</h2>
                <form onSubmit={handleSubmit}>
                    <label>task to do:</label>
                    <input 
                        type="text"
                        className="task-title-input"
                        id="task-title-input"
                        value={ task }
                        required
                        onChange={ (e) => { setTask(e.target.value) } }
                    />

                    <label>before:</label>
                    <input 
                        type="datetime-local"
                        className="task-deadline-input"
                        id="task-deadline-input"
                        value={ deadline }
                        required
                        onChange={ (e) => { setDeadline(e.target.value) } }
                    />

                    <label>description:</label>
                    <textarea 
                        onChange={ (e) => { setDescription(e.target.value) } }
                        className="task-description-input"
                        id="task-description-input"
                        rows={5}
                        cols={50}
                        value={ description }
                    >
                        
                    </textarea>

                    <button type="submit" className="add-task-submit-btn">update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateTask;