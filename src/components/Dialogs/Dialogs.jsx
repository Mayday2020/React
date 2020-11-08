import s from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {                        // Компанента -  диалог
    let dialogs = [{id: 1, name: "Dmitry"},         // Список собеседников
        {id: 2, name: "Vlad"},
        {id: 3, name: "Kostya"},
        {id: 4, name: "Alex"},
        {id: 5, name: "Nastya"}
    ];
    let messages = [                                // История сообщений
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Where are you from?"},
        {id: 4, message: "How old are you?"},
        {id: 5, message: "Do you like flowers?"}
    ];
    let dialogsElement = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);         //Пользователь
    let messagesElement = messages.map(m => <Message message={m.message}/>);              //Сообщение
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