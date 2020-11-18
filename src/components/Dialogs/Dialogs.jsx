import s from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import React from 'react';
const Dialogs = (props) => {                        // Компанента -  диалог
    let dialogsElement = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);         //Пользователь
    let messagesElement = props.state.messages.map(m => <Message message={m.message}/>);              //Сообщение
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                    <textarea ref={ newMessageElement } cols="60" rows="3"></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Add message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;