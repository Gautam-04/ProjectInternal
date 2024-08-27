import React from 'react'
import { useUser } from '../../context/UserProvider'
import './Home.css'

function Home() {
  const {user}  = useUser();
  return (
    <>
      hello
      {user && user.role ? (
        <p>Welcome, your role is: {user.role}</p>
      ) : (
        <p>Loading user information...</p>
      )}
    </>
  )
}

export default Home