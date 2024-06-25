import React, { useEffect, useState } from 'react';
import Profile from '../components/profile';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const [profileDetails, setProfileDetails] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get('https://0c91-41-38-133-68.ngrok-free.app/api/user-profile/', {
          headers: {
            "Authorization": `Bearer ${token}`,
            "ngrok-skip-browser-warning": "2222"
          }
        });
        setProfileDetails(response.data);
      } catch (error) {
        console.error('Error fetching the profile details:', error);
      }
    };
    fetchUserDetails();
  }, []);
  
  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }


  return (
    <>
      {profileDetails.data ? (
        <Profile name={profileDetails.data.name} email={profileDetails.data.email} logout={logout} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProfilePage;
