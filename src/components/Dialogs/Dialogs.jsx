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
    let d = {id: 1, name: "Dmitry"};
    let v = {id: 2, name: "Vlad"};
    let k = {id: 3, name: "Kostya"};
    let a = {id: 4, name: "Alex"};
    let n = {id: 5, name: "Nastya"};
    let dialogsData = [d, v, k, a, n]

    let messagesData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Where are you from?"},
        {id: 4, message: "How old are you?"},
        {id: 5, message: "Do you like flowers?"}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name="Vlad" id="2"/>
                <DialogItem name="Kostya" id="3"/>
                <DialogItem name="Alex" id="4"/>
                <DialogItem name="Nastya" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
            </div>
        </div>

    )
}

export default Dialogs;