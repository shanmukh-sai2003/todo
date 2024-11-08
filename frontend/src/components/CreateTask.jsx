import { useState } from "react";
import { addTask } from "../utils/services";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
    const [task, setTask] = useState("");
    const now = new Date();
    const nowString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const [deadline, setDeadline] = useState(nowString);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        createTask();
    }

    async function createTask() {
        const temDeadline = deadline + ":00.000+05:30";
        const body = { task, 'deadline': temDeadline, description };
        try {
            const response = await addTask(body);
            if(response?.success) {
                setTask('');
                setDeadline();
                setDescription("");
                navigate('/');
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
                <h2 className="add-task-heading">Add task</h2>
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

                    <button type="submit" className="add-task-submit-btn">Add</button>
                </form>
            </div>
        </div>
    );
}

export default CreateTask;