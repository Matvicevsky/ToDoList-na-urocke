import React from 'react'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import {tasksReducer} from '../../state/tasks-reducer'
import {todolistsReducer} from '../../state/todolists-reducer'
import {AppRootStateType} from '../../state/store'

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})

export const initialGlobalState = {};

export const storyBookStore = createStore(rootReducer, initialGlobalState as  AppRootStateType);

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider
        store={storyBookStore}>{storyFn()}
    </Provider>)
