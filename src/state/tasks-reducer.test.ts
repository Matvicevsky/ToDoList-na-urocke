import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, setTaskAC, tasksReducer} from './tasks-reducer';
import {TasksStateType, TaskStatuses} from '../AppWithRedux';
import {addTodolistAC, removeTodolistAC} from './todolists-reducer';

let startState: TasksStateType = {};
beforeEach(() => {
    startState = {
        "todolistId1": [
            { id: "1", title: "CSS",todoListId: '1', description: '', priority: 1, status: 1, starDate: '', addedDate: '', order: 1, deadline: ''   },
            { id: "2", title: "JS", todoListId: '1', description: '', priority: 1, status: 1, starDate: '', addedDate: '', order: 1, deadline: '' },
            { id: "3", title: "React", todoListId: '1', description: '', priority: 1, status: 1, starDate: '', addedDate: '', order: 1, deadline: '' }
        ],
        "todolistId2": [
            { id: "1", title: "bread", todoListId: '1', description: '', priority: 1, status: 1, starDate: '', addedDate: '', order: 1, deadline: '' },
            { id: "2", title: "milk", todoListId: '1', description: '', priority: 1, status: 1, starDate: '', addedDate: '', order: 1, deadline: '' },
            { id: "3", title: "tea", todoListId: '1', description: '', priority: 1, status: 1, starDate: '', addedDate: '', order: 1, deadline: '' }
        ]
    };
});

test('correct task should be deleted from correct array', () => {
    const action = removeTaskAC("2", "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(2);
    expect(endState["todolistId2"].every(t => t.id != "2")).toBeTruthy();
});
test('correct task should be added to correct array', () => {
    const action = addTaskAC({
        todoListId: 'todolistId2',
        title: 'juce',
        status: TaskStatuses.New,
        addedDate: '',
        deadline: '',
        description: '',
        order: 0,
        priority: 0,
        starDate: '',
        id: 'asfasfasgsgsdgsdg',
    });

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId2"][0].id).toBeDefined();
    expect(endState["todolistId2"][0].title).toBe("juce");
});
test('status of specified task should be changed', () => {
    const action = changeTaskStatusAC("2", 0, "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"][1].status).toBe(1);
    expect(endState["todolistId2"][1].status).toBe(0);
});
test('title of specified task should be changed', () => {
    const action = changeTaskTitleAC("2", "yogurt", "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"][1].title).toBe("JS");
    expect(endState["todolistId2"][1].title).toBe("yogurt");
    expect(endState["todolistId2"][0].title).toBe("bread");
});
test('new array should be added when new todolist is added', () => {
    const action = addTodolistAC({id: '3', title: "New Todolist", filter: "all"});

    const endState = tasksReducer(startState, action)


    const keys = Object.keys(endState);
    const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2");
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});
test('propertry with todolistId should be deleted', () => {
    const action = removeTodolistAC("todolistId2");

    const endState = tasksReducer(startState, action)

    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});

test('tasks should be added fo todolist', () => {
    const action = setTaskAC(startState['todolistId1'], 'todolistId1');

    const endState = tasksReducer({
        "todolistId1": [],
        "todolistId2": [],

    }, action)


    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(0);
});



