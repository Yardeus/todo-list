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
import {addTodo, setUserId} from "../../redux/todo-reducer";
import {AppStateType} from "../../redux/store";
import {compose} from "redux";
import {connect} from "react-redux";

interface PropsType {
    isFetching : boolean,
    addTodo: (userId: number | null, title: string | null, id:number | null)=>void,
    userId: number | null,
    countData: number | null

}

 const FormDialog: React.FC<PropsType> = ({addTodo, userId, countData}) => {
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

            <AddIcon  onClick={handleClickOpen}/>
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
                        addTodo(userId,text,countData)
                        handleClose()
                    }}>Добавить</Button>
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
    connect(mapStateToProps, {addTodo})
)(FormDialog);
