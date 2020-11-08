import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {             //Собеседник
    const path = "/dialogs/" + props.id;    //формирует адрес по ID пользователя
    return (
        <div className={s.dialog + ' ' + s.active}><NavLink to={path}>{props.name}</NavLink></div>
    )
}
const Message = (props) => {                //Переписка
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dmitry" id="1"/>
                <DialogItem name="Vlad" id="2"/>
                <DialogItem name="Kostya" id="3"/>
                <DialogItem name="Vova" id="4"/>
                <DialogItem name="Nastya" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="How are you?"/>
                <Message message="Where are you from?"/>
            </div>
        </div>

    )
}

export default Dialogs;