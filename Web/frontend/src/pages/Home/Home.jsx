import React,{useState,useEffect} from 'react'
import { useUser } from '../../context/UserProvider'
import './Home.css'

function Home() {
const [Role,setRole] = useState("");
  useEffect(() => {
    const role = localStorage.getItem('role')

    setRole(role);
    console.log(role)
  }, [])
  return (
    <>
        {Role === 'superAdmin'? 
        <>
        <div className="home">
          <div className='box box1'>
          Box1
          </div>
          <div className='box box4'>4</div>
          <div className='box box7'>7</div>
          <div className='box box2'>2</div>
          <div className='box box3'>3</div>
          <div className='box box5'>5</div>
          <div className='box box6'>6</div>
      </div>
        </>:
        <> 
        Admin
        </>}
    </>
  )
}

export default Home