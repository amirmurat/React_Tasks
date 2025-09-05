import UserCard from './components/UserCard'
import Button from './components/Button'

import './App.css'

function App() {
  const users = [
    {
      name: "Amir",
      email: "amir@gmail.com"
    },
    {
      name: "Alisher",
      email: "alisher@gmail.com"
    },
    {
      name: "Alizhan",
      email: "alizhan@gmail.com"
    },
  ]

  const buttons = [
    { text: "Add" },
    { text: "Edit" },
    { text: "Delete" },
  ]
  
  return (
    <>
      <div className='user_cards'>
        {users.map(user => (
          <UserCard 
            key={user.name}
            name={user.name}
            email={user.email}
          />
        ))}
      </div>
      <div className='buttons'>
        {buttons.map(button => (
          <Button 
            key={button.text}
            text={button.text}
          />
        ))}
      </div>
    </>
  )
}

export default App
