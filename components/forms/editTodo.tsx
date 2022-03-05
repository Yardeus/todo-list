import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from "@mui/icons-material/Add";
import styles from "../../styles/addTodo.module.scss";
import {addTodo, editTodo, setUserId} from "../../redux/todo-reducer";
import {AppStateType} from "../../redux/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {dataType} from "../../types/types";
import EditIcon from "@mui/icons-material/Edit";

interface PropsType {
    editTodo: (data: Array<object>,title: string | null, id: number | null)=>void,
    id: number | null,
    title: string | null,
    data: Array<dataType>

}

const EditTodo: React.FC<PropsType> = ({data,title, id,editTodo}) => {
    const [open, setOpen] = React.useState(false);
    const [text, setText] = React.useState<string | null>(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.add}>
            <EditIcon onClick={handleClickOpen}/>
            <Dialog open={open} fullWidth={true} onClose={handleClose}>
                <DialogTitle>TODO</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Опишите один пункт
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="TODO"
                        type="todo"
                        defaultValue={title}
                        fullWidth
                        variant="standard"
                        onChange={(e)=>{
                            setText(e.target.value)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отменить</Button>
                    <Button onClick={(e)=>{
                        editTodo(data,text,id)
                        handleClose()
                    }}>Сохранить</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};


const mapStateToProps = (state: AppStateType) => ({
    isFetching: state.todo.isFetching,
    userId: state.todo.userId
})

export default compose(
    connect(mapStateToProps, {editTodo})
)(EditTodo);
