import cl from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={cl.dialogs}>
           <div className={cl.dialogs__items}>
                <div className={`${cl.dialog} ${cl.active}`}>Dimon</div>
                <div className={cl.dialog}>Katia</div>
                <div className={cl.dialog}>Den</div>
                <div className={cl.dialog}>Victor</div>
           </div>
           <div className={cl.messages}>
               <div className={cl.message}>Witam</div>
               <div className={cl.message}>Wats up!</div>
               <div className={cl.message}>Iyou!</div>
           </div> 
        </div>
    )
};

export default Dialogs;
