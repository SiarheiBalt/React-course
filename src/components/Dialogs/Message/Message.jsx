
import cl from './../Dialogs.module.css';

const Message = (props) => {
    return <div className={cl.message}><div>{props.message}</div><img src="" /></div>
}

export default Message;