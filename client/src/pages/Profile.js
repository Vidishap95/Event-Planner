import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { VIEW_PROFILE } from '../utils/queries';

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({
    profileName: "",
    profileEmail: "",
  });
  const { loading, data } = useQuery(VIEW_PROFILE);
  const profile = data?.viewProfile || [];

  return (
    <div>


      <div className='flex justify-center min-h-full w-screen container mx-auto'>
        <div className='Card hover:shadow-2xl hover:-translate-y-2 w-80 h-80 p-2 bg-amber-950 rounded-lg'>
          <div className='p-5 flex flex-col text-center'>
            <h5 className='text-lg mt-3 text-yellow-100 '>{profile.name} </h5>
            <p className='text-lg mt-3 text-yellow-100'>{profile.email}</p>
          </div>
        </div>
      </div>



    </div>
  )


}

export default Profile;
