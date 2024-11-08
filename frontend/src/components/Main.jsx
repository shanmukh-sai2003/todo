import { getTasks } from "../utils/services";
import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import NotFound from "./NotFound";

const Main = () => {

    const [taskList, setTaskList] = useState();

    useEffect(() => {
        getTaskList();
    }, []);

    async function getTaskList() {
        try {
            const data = await getTasks();
            if(data?.success) {
                setTaskList(data?.data);
            } else if(data?.statusCode === 404) {
                setTaskList([]);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    if(taskList === undefined) {
        return <div>loading...</div>
    }

    if(taskList.length === 0) {
        return <NotFound />
    }

    return (
        <main className="main">
            <div className="incomplete-tasks">
                <TaskList taskList={taskList?.filter(task => !task.completed)} heading="Yet to-dos" updateList={getTaskList}/>
            </div>
            <div className="complete-tasks">
                <TaskList taskList={taskList?.filter(task => task.completed)} heading="done to-dos" updateList={getTaskList}/>
            </div>
        </main>
    );
}

export default Main;