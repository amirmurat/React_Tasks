import './index.css'

function UserCard({name, email}) {
    return(
        <div className="user_card">
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default UserCard