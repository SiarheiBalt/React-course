import MyPosts from './MyPosts/MyPosts'
import cl from './Profile.module.css'

const Ppofile = () => {
    return <div className={cl.content}>
        <div><img src="https://images.ctfassets.net/hrltx12pl8hq/66lRNN2kfHcVSUMrmrcKxf/76b78071032586ff9766d8eb51592f21/free-nature-images.jpg?fit=fill&w=840&h=350" /></div>
        <div>Ava + description</div>
        <MyPosts />
    </div>
} 

export default Ppofile;