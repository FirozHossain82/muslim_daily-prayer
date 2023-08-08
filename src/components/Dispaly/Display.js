import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Display = ({time, gap}) => {
    const successHandle = () => {
        toast('Today Your Prayer Completed');
    }
    return (
        <div>
            <h2 className='text-lg font-serif font-semibold m-2 mb-6'>Prayer Details</h2>
            <div>
                <div className='bg-cyan-200 rounded-lg m-2 flex justify-between mb-8 p-3'>
                    <p className='text-lg font-sans font-semibold'>Prayer time</p>
                    <p>{time} minutes</p>
                </div>
                <div className='bg-cyan-200 rounded-lg m-2 flex justify-between mb-8 p-3'>
                    <p className='text-lg font-sans font-semibold'>Break time</p>
                    <p>{gap} seconds</p>
                </div>
                <div  className='bg-purple-400 text-center rounded-lg m-2 mb-5 p-3'>
                    <button onClick={() => successHandle()} className='text-lg font-sans font-semibold'>Activity Completed</button>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Display;