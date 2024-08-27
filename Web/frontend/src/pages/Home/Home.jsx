import React,{useState,useEffect} from 'react'
// import { useUser } from '../../context/UserProvider'
import './Home.css'
import Helpline from '../../components/SuperAdminGraphs/Box1/Helpline';
import Box4 from '../../components/SuperAdminGraphs/Box4/Box4';
import Box2 from '../../components/SuperAdminGraphs/Box2/Box2';
import Box3 from '../../components/SuperAdminGraphs/Box3/Box3';
import Box5 from '../../components/SuperAdminGraphs/Box5/Box5';
import Box6 from '../../components/SuperAdminGraphs/Box6/Box6';
import Box7 from '../../components/SuperAdminGraphs/Box7/Box7';

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
          <Helpline />
          </div>
          <div className='box box4'><Box4 /></div>
          <div className='box box7'><Box7 /></div>
          <div className='box box2'><Box2 /></div>
          <div className='box box3'><Box3 /></div>
          <div className='box box5'><Box5 /></div>
          <div className='box box6'><Box6 /> </div>
      </div>
        </>:
        <> 
        Admin
        </>}
    </>
  )
}

export default Home