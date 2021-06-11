import React, {useEffect, useState} from 'react'
import {todolistsApi} from "../api/todolists-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.getTodolist()
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('')

    const createTodolist = () => {
        todolistsApi.createTodolist(title)
            .then((res) => {
                setState(res.data)
            })
        setTitle('')
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input type="text"
                   placeholder={'enter the title'}
                   value={title}
                   onChange={(e) => {
                       setTitle(e.currentTarget.value)
                   }}/>
            <button onClick={createTodolist}>createTodolist</button>
        </div>
    </div>
}

export const DeleteTodolist = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')

    const deleteTodolist = () => {
        todolistsApi.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
        setTodolistId('')
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input type="text"
                   placeholder={'todolistId'}
                   value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}/>
            <button onClick={deleteTodolist}>deletTodolis</button>
        </div>
    </div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const updateTodolistTitle = () => {

        todolistsApi.updateTodolist(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
        setTitle('');
        setTodolistId('');
    }


    return <div>
        {JSON.stringify(state)}
        <div>
            <input type="text"
                   placeholder={'todolistId'}
                   value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}/>
            <input type="text"
                   placeholder={"enter the title"}
                   value={title}
                   onChange={(e) => {
                       setTitle(e.currentTarget.value)
                   }}/>
            <button onClick={updateTodolistTitle}>updateTodolist</button>
        </div>
    </div>
}

export const GetTasks = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')

    const getTask = () => {
        todolistsApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data);
            })
        setTodolistId('')
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input type="text"
            placeholder={'todolistId'}
            value={todolistId}
            onChange={(e) => {setTodolistId(e.currentTarget.value)}}/>
            <button onClick={getTask}>getTask</button>
        </div>
    </div>
}

export const PostTask = () => {

    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('');
    const [title, setTitle] = useState<string>('');

    const postTitle = () => {
        todolistsApi.createTask(todolistId, title)
            .then((res) => {
                setState(res.data);
            })
        setTodolistId('');
        setTitle('');
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input type="text"
            placeholder={'todolistId'}
            value={todolistId}
            onChange={(e) => {setTodolistId(e.currentTarget.value)}}/>
            <input type="text"
                   placeholder={'title'}
                   value={title}
                   onChange={(e) => {setTitle(e.currentTarget.value)}}/>
            <button onClick={postTitle}>PostTask</button>
        </div>
    </div>
}

export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")
    const [taskId, setTaskId] = useState<string>("")

    const deleteTask = () => {
        debugger
        todolistsApi.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data);
            })
        setTaskId('')
        setTodolistId('')
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input type="text" placeholder={'todolistId'} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>

            <input type="text" placeholder={'taskId'} value={taskId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>

            <button onClick={deleteTask}>deleteTask</button>
        </div>

    </div>
}

export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null);
    const [todolistId, setTodolistId] = useState<string>('');
    const [taskId, setTaskId] = useState<string>('');
    const [newTitle, setNewTitle] = useState<string>('');

    const updateTitleTask = () => {
        todolistsApi.updateTask(todolistId, taskId, newTitle)
            .then((res) => {
                setState(res.data);
            })
        setTodolistId('');
        setTaskId('');
        setNewTitle('');

    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input type="text"
            placeholder={'todolistId'}
            value={todolistId}
            onChange={(e) => {setTodolistId(e.currentTarget.value)}}/>
            <input type="text"
                   placeholder={'taskId'}
                   value={taskId}
                   onChange={(e) => {setTaskId(e.currentTarget.value)}}/>
            <input type="text"
                   placeholder={'newTitle'}
                   value={newTitle}
                   onChange={(e) => {setNewTitle(e.currentTarget.value)}}/>
            <button onClick={updateTitleTask}>update</button>
        </div>
    </div>
}