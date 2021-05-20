import cl from "./Friends.module.css";

const Friends = (props) => {
    return <div className={cl.friends}>
        <img src={props.data.ava} alt=""/>
        <div>{props.data.name}</div>
         </div>
}

export default Friends;