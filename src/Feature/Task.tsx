import { useAppSelector } from "@/counter/hooks";
import { selectFilter, selectTask } from "@/counter/taskSlice";
import TaskCard from "./Task/TaskCard";
import AddTaskModel from "./Task/AddTaskModel";

function Task() {
  const tasks=useAppSelector(selectTask);
  const filter=useAppSelector(selectFilter)
return (
  <div>
    <h1>Hello Task</h1>
    <AddTaskModel></AddTaskModel>
    {
      tasks.map((task) => (
        <TaskCard task={task}/>
      ))
    }
  </div>
);
}
export default Task;
