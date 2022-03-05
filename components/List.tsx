import React, {useEffect, useState} from "react";
import styles from "../styles/list.module.scss"
import {deleteTodo, getTodos, InitialStateType, setTodos} from "../redux/todo-reducer";
import {AppStateType} from "../redux/store";
import {compose} from "redux";
import {connect} from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Pagination from "@material-ui/lab/Pagination"
import {Checkbox, Fab } from "@mui/material";
import FormDialog from "./forms/addTodo";
import {dataType} from "../types/types";
import EditTodo from "./forms/editTodo";

interface PropsType {
    isFetching: boolean,
    getTodos: (userId: number | null) => void,
    setTodos: (data: Array<object>, countData: number | null) => void,
    deleteTodo: (data: Array<object>, id: number | null) => void,
    data: Array<object> | null,
    userId: number | null,
    countData: number | null
}


const List: React.FC<PropsType> = ({isFetching, data, getTodos, userId, setTodos, countData,deleteTodo}) => {
    debugger
    const [page, setPage] = useState(1)
    let pageSize = 5
    let startRow = page * pageSize - pageSize
    let endRow = page * pageSize - 1
    let dataPerPage: Array<object> = []
    let pagesCount = 0;
    if (data){
        pagesCount = Math.ceil(data.length / pageSize);
    }

    if (data) {
        let c = 0
        data.map(i=>{
            if(c>=startRow && c<= endRow){
                dataPerPage.push(i)
                c++
            } else {
                c++
            }
        })
    }



    useEffect(() => {
        userId ? getTodos(userId) : null
    }, [])


    return <div className={styles.container}>
        {userId ?
            data ?
                <>
                    <div className={styles.chip}>
                        <div className={styles.head}>
                            <div className={styles.textWrapper}>
                                <div className={styles.text}>todo list</div>

                            </div>
                            <div className={styles.add}>
                                <FormDialog countData={countData} />
                            </div>
                        </div>

                        <div className={styles.rows}>
                            {dataPerPage.map((i: any) => <div className={styles.row} key={i.id}>
                                <div className={styles.checkbox}>
                                    <Checkbox onChange={(e)=>{
                                        let arr: Array<object> = []
                                        data?.map((r:any) => {
                                            if(r.id === i.id) {

                                                let obj:dataType = {
                                                    userId: r.userId,
                                                    id: r.id,
                                                    title: r.title ,
                                                    isCompleted: e.target.checked
                                                }
                                                arr.push(obj)
                                            } else {
                                                arr.push(r)
                                            }
                                        })
                                        setTodos(arr, countData)
                                    }} />
                                </div>

                                <div className={styles.title}>{i.title}</div>
                                <div className={styles.buttons}>
                                    <div className={styles.edit}>
                                        <EditTodo data={data} id={i.id} title={i.title}/>
                                    </div>
                                    <div className={styles.delete} onClick={(e)=>{
                                        deleteTodo(data,i.id)
                                        if (dataPerPage.length===1){
                                            setPage(page-1)
                                        }
                                    }}>
                                        <DeleteIcon />
                                    </div>
                                </div>
                            </div>)}
                        </div>


                    </div>


                    <div className={styles.pagination}>
                        <Pagination count={pagesCount} showFirstButton showLastButton
                                    onChange={(event, page) => {
                                        setPage(page)
                                    }}/>
                    </div>





                </>
                : null
            : <div>авторизуйтесь</div>}
    </div>
};

const mapStateToProps = (state: AppStateType) => ({
    isFetching: state.todo.isFetching,
    data: state.todo.data,
    userId: state.todo.userId,
    countData: state.todo.countData
})

export default compose(
    connect(mapStateToProps, {getTodos,setTodos,deleteTodo})
)(List);
