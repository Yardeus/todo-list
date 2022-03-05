import React, {useEffect, useState} from "react";
import styles from "../styles/auth.module.scss"
import {InitialStateType, setUserId} from "../redux/todo-reducer";
import {AppStateType} from "../redux/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {TextField} from "@mui/material";


interface PropsType {
    setUserId: (userId: number | null) => void,

}


const Auth: React.FC<PropsType> = ({setUserId}) => {

    const [id, setId] = useState<number | null>(null)
    const [isTrue, setIsTrue] = useState<boolean | null>(false)


    return <div className={styles.container}>
        <div className={styles.field}>
            <TextField id="standard-basic" label="Введите свой ID" variant="standard" onChange={(e) => {
                if (Number(e.target.value)) {
                    setIsTrue(true)
                } else setIsTrue(false)
                setId(Number(e.target.value))
            }}/>
        </div>
        {id !== null ?
            !isTrue ?
                <div className={styles.warn}>
                    Введите только цифры
                </div>
                : null
            : null}
        {isTrue === null ? <div className={styles.warn}>
            Вы вошли под ID
        </div> : null}

        <div className={styles.btn} onClick={() => {
            id&&isTrue ? setUserId(id) : null

        }

        }>
            Войти
        </div>

    </div>
};

const mapStateToProps = (state: AppStateType) => ({
    isFetching: state.todo.isFetching,
    userId: state.todo.userId
})

export default compose(
    connect(mapStateToProps, {setUserId})
)(Auth);
