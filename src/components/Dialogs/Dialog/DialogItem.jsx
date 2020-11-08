import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {             //Компанента
    const path = "/dialogs/" + props.id;    //формирует адрес по ID пользователя
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.dialogsAvatar} />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;