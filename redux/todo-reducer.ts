import {todoAPI} from "../api/api";
import {object} from "prop-types";
import {Dispatch} from "redux";
import {dataType} from "../types/types";

const SET_USER_ID = 'SET_USER_ID';
const SET_TODOS = 'SET_TODOS';
const SET_TOGGLE_IS_FETCHING = 'SET_TOGGLE_IS_FETCHING';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';


export type InitialStateType = {
    userId: number | null,
    data: Array<object> | null,
    isFetching: boolean,
    countData: number | null


}

let initialState: InitialStateType = {
    isFetching: false,
    userId: null,
    data: null,
    countData: null
}

type ActionType = SetUserIdActionType | ToggleIsFetchingActionType | SetTodosActionType | AddTodoActionType | DeleteTodoActionType | EditTodoActionType

const todoReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_ID:
            return {
                ...state,
                userId: action.payload.userId

            };

        case SET_TODOS:
            return {
                ...state,
                data: action.payload.data,
                countData: action.payload.count


            };
        case ADD_TODO:
            return {
                ...state,
                data: [...state.data!, action.payload],
                countData: action.payload.id

            };
        case DELETE_TODO:
            return {
                ...state,
                data: action.payload.data

            };
        case EDIT_TODO:
            return {
                ...state,
                data: action.payload.data

            };
        case SET_TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload.isFetching

            };

        default:
            return state;
    }
}

type SetUserIdActionPayloadType = {
    userId: number | null
}
type SetUserIdActionType = {
    type: typeof SET_USER_ID,
    payload: SetUserIdActionPayloadType
}
export const setUserId = (userId: number | null): SetUserIdActionType => {
    return {
        type: SET_USER_ID,
        payload: {
            userId
        }
    }
}

type AddTodoActionPayloadType = {
    userId: number | null,
    id: number | null,
    title: string | null,
    isCompleted: boolean
}
type AddTodoActionType = {
    type: typeof ADD_TODO,
    payload: AddTodoActionPayloadType,
}
export const addTodo = (userId: number | null, title: string | null, id: number | null): AddTodoActionType => {
    if (id){
        id++
    }
    return {
        type: ADD_TODO,
        payload: {
            userId,
            id,
            title,
            isCompleted: false
        }
    }
}

type EditTodoActionPayloadType = {
    data: Array<dataType>
}
type EditTodoActionType = {
    type: typeof EDIT_TODO,
    payload: EditTodoActionPayloadType,
}
export const editTodo = (data: Array<object>,title: string | null, id: number | null): EditTodoActionType => {
    let newData:Array<object>=[]
    data.map((i:dataType)=>{
        if (i.id === id) {
            let obj:dataType = {
                id,
                userId: i.userId,
                title: title,
                isCompleted: i.isCompleted
            }
            newData.push(obj)
        } else {
            newData.push(i)
        }
    })
    return {
        type: EDIT_TODO,
        payload: {
            data: newData
        }
    }
}

type DeleteTodoActionPayloadType = {
    data: Array<dataType>,
}
type DeleteTodoActionType = {
    type: typeof DELETE_TODO,
    payload: DeleteTodoActionPayloadType,
}
export const deleteTodo = (data: Array<object>,id: number | null): DeleteTodoActionType => {
    let newData:Array<object>=[]
    data.map((i:dataType)=>{
        if (i.id !== id) {
            newData.push(i)
        }
    })
    return {
        type: DELETE_TODO,
        payload: {
            data:newData
        }
    }
}

type ToggleIsFetchingActionPayloadType = {
    isFetching: boolean
}
type ToggleIsFetchingActionType = {
    type: typeof SET_TOGGLE_IS_FETCHING,
    payload: ToggleIsFetchingActionPayloadType
}
const toggleIsFetching = (type: boolean): ToggleIsFetchingActionType => {
    return {
        type: SET_TOGGLE_IS_FETCHING,
        payload: {
            isFetching: type
        }
    }
}

type SetTodosActionPayloadType = {
    data: Array<dataType>,
    count: number | null
}
type SetTodosActionType = {
    type: typeof SET_TODOS,
    payload: SetTodosActionPayloadType
}
export const setTodos = (data: Array<object>, count: number | null): SetTodosActionType => {
    return {
        type: SET_TODOS,
        payload: {
            data,
            count
        }
    }
}

export const getTodos = (userId: number | null) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFetching(true));
    todoAPI.getTodos()
        .then(data => {
            let userData: Array<object> = []
            data.map((i: any) => {
                if (i.userId === userId) {
                    userData.push(i)
                }
            })


            let lastRow: dataType = {}
            lastRow = data[data.length - 1]
            let countRows = Number(lastRow.id)
            dispatch(setTodos(userData, countRows))
            dispatch(toggleIsFetching(false));
        })

}


export default todoReducer;