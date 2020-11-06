import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}><NavLink to="/dialogs/1">Dmitry</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/2">Vlad</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/3">Kostya</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/4">Vova</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/5">Nastya</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi!
                </div>
                <div className={s.message}>
                    How are you?
                </div>
                <div className={s.message}>
                    Whera are you from?
                </div>
            </div>
        </div>
    )
}

export default Dialogs;