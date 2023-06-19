import React from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import EventList from '../components/EventList';
import EventForm from '../components/EventForm';

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {

  return (
    <div className='flex justify-center min-h-full w-screen container mx-auto'>
      <div className=''>
        <div className='Card hover:shadow-2xl hover:-translate-y-2 w-80 h-80 p-2 bg-amber-950 rounded-lg'>
          <div className='p-5 flex flex-col text-center'>
            <h5 className='text-lg mt-3 text-yellow-100 '>Profile username </h5>
            <p className='text-lg mt-3 text-yellow-100'> Profile Email</p>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Profile;