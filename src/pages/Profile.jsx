import React, { useEffect, useState } from 'react'
import Profile from '../components/profile'
import axios from 'axios'

function ProfilePage() {
  const [profileDetails, setProfileDetails] = useState(null)
  useEffect(() => {
    const fetchUserDetails = async () => {
    const token = localStorage.getItem("token")
    const response = await axios.get('https://0c91-41-38-133-68.ngrok-free.app/api/user-profile/')
    setProfileDetails(response.data)
    console.log(response.data)
    }
    fetchUserDetails()
  }, [])
  return (
    <Profile src={'test'}/>
  )
}

export default ProfilePage