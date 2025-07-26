import type { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";



export interface ITask {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
    priority: "High" | "Medium" | "Low";
}

interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low"
}

const initialState: InitialState = {
    tasks: [
        {
            id: "Initial",
            title: "Initial Frontend",
            description: "Create frontend ",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High"
        },
        {
            id: "Initial two",
            title: "Initial Frontend",
            description: "Create frontend and routing alogorithm",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "High"
        },
    ],
    filter: "all"
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            state.tasks.push(action.payload)
        }
    }
});

export const selectTask = (state: RootState) => {
    return state.todo.tasks;
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}
export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;