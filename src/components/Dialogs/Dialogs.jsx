import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Dmitry</div>
                <div className={s.dialog}>Vlad</div>
                <div className={s.dialog}>Kostya</div>
                <div className={s.dialog}>Vova</div>
                <div className={s.dialog}>Nastya</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Whera are you from?</div>
            </div>
        </div>
    )
}

export default Dialogs;