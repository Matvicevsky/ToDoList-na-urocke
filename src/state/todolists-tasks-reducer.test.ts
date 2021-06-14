import {TasksStateType, TodolistType} from '../AppWithRedux';
import {addTodolistAC, setTodolistsAC, todolistsReducer} from './todolists-reducer';
import {tasksReducer} from './tasks-reducer';


test('ids should be equals', () => {
    const startTasksState: TasksStateType = {};
    const startTodolistsState: Array<TodolistType> = [];

    const action = addTodolistAC({id: '1', title: "What to learn", filter: 'all'});

    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistsState = todolistsReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].id;

    expect(idFromTasks).toBe(action.todolist.id);
    expect(idFromTodolists).toBe(action.todolist.id);
});

test('array tasks should be added', () => {
    const  action = setTodolistsAC([
        {id: '1', title: "What to learn", filter: 'all'},
        {id: '2', title: "What to buy", filter: "all"}
        ]
    );
    const endState = tasksReducer({}, action)

    const keys = Object.keys(endState)

    expect(keys.length).toBe(2)
    expect(endState['1']).toStrictEqual([])
    expect(endState['2']).toStrictEqual([])
})