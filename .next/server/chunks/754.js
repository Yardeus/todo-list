"use strict";
exports.id = 754;
exports.ids = [754];
exports.modules = {

/***/ 3754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rk": () => (/* binding */ addTodo),
  "ZP": () => (/* binding */ todo_reducer),
  "aS": () => (/* binding */ deleteTodo),
  "bm": () => (/* binding */ editTodo),
  "LC": () => (/* binding */ getTodos),
  "Gn": () => (/* binding */ setTodos),
  "Iv": () => (/* binding */ setUserId)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./api/api.ts

const instance = external_axios_default().create({
    //настройки
    baseURL: 'https://jsonplaceholder.typicode.com/'
});
const todoAPI = {
    getTodos () {
        return instance.get(`todos`).then((response)=>response.data
        );
    }
};

;// CONCATENATED MODULE: ./redux/todo-reducer.ts

const SET_USER_ID = 'SET_USER_ID';
const SET_TODOS = 'SET_TODOS';
const SET_TOGGLE_IS_FETCHING = 'SET_TOGGLE_IS_FETCHING';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
let initialState = {
    isFetching: false,
    userId: null,
    data: null,
    countData: null
};
const todoReducer = (state = initialState, action)=>{
    switch(action.type){
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
                data: [
                    ...state.data,
                    action.payload
                ],
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
};
const setUserId = (userId)=>{
    return {
        type: SET_USER_ID,
        payload: {
            userId
        }
    };
};
const addTodo = (userId, title, id)=>{
    if (id) {
        id++;
    }
    return {
        type: ADD_TODO,
        payload: {
            userId,
            id,
            title,
            isCompleted: false
        }
    };
};
const editTodo = (data, title, id)=>{
    let newData = [];
    data.map((i)=>{
        if (i.id === id) {
            let obj = {
                id,
                userId: i.userId,
                title: title,
                isCompleted: i.isCompleted
            };
            newData.push(obj);
        } else {
            newData.push(i);
        }
    });
    return {
        type: EDIT_TODO,
        payload: {
            data: newData
        }
    };
};
const deleteTodo = (data, id)=>{
    let newData = [];
    data.map((i)=>{
        if (i.id !== id) {
            newData.push(i);
        }
    });
    return {
        type: DELETE_TODO,
        payload: {
            data: newData
        }
    };
};
const toggleIsFetching = (type)=>{
    return {
        type: SET_TOGGLE_IS_FETCHING,
        payload: {
            isFetching: type
        }
    };
};
const setTodos = (data, count)=>{
    return {
        type: SET_TODOS,
        payload: {
            data,
            count
        }
    };
};
const getTodos = (userId)=>(dispatch)=>{
        dispatch(toggleIsFetching(true));
        todoAPI.getTodos().then((data)=>{
            let userData = [];
            data.map((i)=>{
                if (i.userId === userId) {
                    userData.push(i);
                }
            });
            let lastRow = {};
            lastRow = data[data.length - 1];
            let countRows = Number(lastRow.id);
            dispatch(setTodos(userData, countRows));
            dispatch(toggleIsFetching(false));
        });
    }
;
/* harmony default export */ const todo_reducer = (todoReducer);


/***/ })

};
;