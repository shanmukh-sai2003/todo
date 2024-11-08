import { useNavigate } from "react-router-dom";
import { deleteTask } from "../utils/services";


const DeleteTask = (props) => {

    const { taskId } = props;
    const navigate = useNavigate();
    
    async function handleClick() {
        try {
            const data = await deleteTask(taskId);
            if(data?.success) {
                navigate(-1);
            } else {
                console.log(data?.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button className="delete-btn" onClick={handleClick}>Delete</button>
    );
}

export default DeleteTask;