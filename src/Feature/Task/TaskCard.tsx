import type { ITask } from "@/counter/taskSlice";

interface IProps{
    task:ITask;
}
function TaskCard({task}:IProps){
    return(
        <div className="bg-gray-500 mt-2">
            <h1>{task.title}</h1>
             <p>{task.description}</p>
           <p>{task.priority}</p>
           
        </div>
    )


}
export default TaskCard;