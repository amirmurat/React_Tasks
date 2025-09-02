import './index.css'
import avatar from '../assets/avatar.jpg'

const ProfileCard = () => {
    return(
        <main>
            <div className='container'>
                <div className='card'>
                    <img src={avatar} alt="avatar" className="avatar" />
                    <div className="info">
                        <h3>Name: Amir</h3>
                        <p>Personal email: <em>murat.amir.olzhasuly@gmail.com</em></p>
                        <p>University email: <em>250746@almau.edu.kz</em></p>
                        <p>Hobbies: coding, reading books, time-management, running, phsychology</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProfileCard