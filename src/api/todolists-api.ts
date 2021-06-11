import axios from "axios";
import {FilterValuesType} from "../AppWithRedux";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "039f23ab-7747-49fb-85d5-08f315224e87"
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})

export type TodolistType = {
    id: string;
    title: string,
    filter: FilterValuesType
}
type CreateTodolistDataType = {
    item: TodolistType
}
type ResponseType<D = {}> = {
    resultCode: number,
    messages: Array<string>,
    data: D
}
export type TaskType = {
    description: string,
    title: string,
    completed: boolean,
    status: number,
    priority: number,
    starDate: string,
    deadline: string,
    id: string,
    todolistId: string,
    order: number,
    addedDate: string
}
type GetTasksResponseType = {
    error: string | null,
    totalCount: number,
    items: Array<TaskType>
}
type PostTaskType = {
    resultCode: number,
    messages: Array<string>,
    data: {
        item: TaskType
    }

}
export type UpdateTaskType = {
    data: {
        item: {
            description: string,
            title: string,
            completed: boolean,
            status: number,
            priority: number,
            starDate: string,
            deadline: string,
        }
    },
    resultCode: number,
    messages: Array<string>,
}
export const todolistsApi = {
    getTodolist() {
        return axios.get<Array<TodolistType>>('https://social-network.samuraijs.com/api/1.1/todo-lists', settings);
    },

    createTodolist(title: string) {
        const promise = instance.post<ResponseType<CreateTodolistDataType>>('todo-lists', {title: title});
        return promise;
    },

    deleteTodolist(id: string) {
        return instance.delete<ResponseType>(`todo-lists/${id}`);
    },

    updateTodolist(id: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${id}`, {title: title});
    },

    getTasks(todolistId: string) {
        const promise = instance.get<GetTasksResponseType>(`todo-lists/${todolistId}/tasks`);
        return promise;
    },

    createTask(todolistId: string, title: string) {
        return instance.post<PostTaskType>(`todo-lists/${todolistId}/tasks`, {title: title})
    },

    deleteTask(todolistId: string, id: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${id}`)
    },

    updateTask(todolistId: string, id: string, title: string) {
        return instance.put<UpdateTaskType>(`todo-lists/${todolistId}/tasks/${id}`, {title: title})
    }

}