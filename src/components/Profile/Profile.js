import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
const Profile = () => {
    return (
        <div className='mb-10'>
            <div className='flex items-center gap-1 mt-5 mb-5 m-2'>
            <img className='w-8 h-8 lg:w-14 lg:h-14 rounded-2xl' src="https://firozhossain82.github.io/Gym-Data/Images/Formal CV Picture.jpg" alt="" />
            <div className='font-serif'>
                    <h2  className='text-2xl font-bold'>Md Firoz Hossain</h2>
                    <p className=' flex items-center gap-1 ml-2 text-sm lg:text-lg font-semibold'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>Mirpur1  Dhaka, Bangladesh</p>
            </div>
            </div>
        </div>
    );
};

export default Profile;