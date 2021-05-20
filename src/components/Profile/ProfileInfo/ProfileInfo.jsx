import cl from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div>
        <div> <img src="https://images.ctfassets.net/hrltx12pl8hq/66lRNN2kfHcVSUMrmrcKxf/76b78071032586ff9766d8eb51592f21/free-nature-images.jpg?fit=fill&w=840&h=350" /></div>
        <div className={cl.descr__block}>Ava + description</div>
    </div>
}

export default ProfileInfo;