import {appReducer, InitialStateType, setAppErrorAC, setAppStatusAC} from "./app-reducer";

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        status: 'idle',
        error: null
    }
})
test('correct status should be set', () => {
    const endState = appReducer(startState, setAppStatusAC('loading'))

    expect(endState.status).toBe('loading')
    expect(startState.status).toBe('idle')
})
test('correct error should be set', () => {
    const endState = appReducer(startState, setAppErrorAC('error'))

    expect(endState.error).toBe('error')
    expect(startState.error).toBe(null)
})