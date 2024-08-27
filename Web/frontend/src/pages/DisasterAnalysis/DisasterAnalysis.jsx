import React,{useState,useEffect} from 'react'

function DisasterAnalysis() {
  const [Role,setRole] = useState("");
  useEffect(() => {
    const role = localStorage.getItem('role')

    setRole(role);
    console.log(role)
  }, [])
  return (
    <>
        {Role === 'superAdmin'? <>SuperAdmin</>:<> Admin</>}
    </>
  )
}

export default DisasterAnalysis


