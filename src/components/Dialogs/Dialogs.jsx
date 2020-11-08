import s from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {                        // Компанента -  диалог

    let dialogsElement = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);         //Пользователь
    let messagesElement = props.messages.map(m => <Message message={m.message}/>);              //Сообщение
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs;