import React from 'react';

const NextEvent = () => {
    return (
        <div>
            <div className="text-center py-5">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-5">Next Event!</h1>
                <p className="text-gray-700">Taste Haven Restaurant serve best Event Managment System.</p>
            </div>
            <div className='w-10/12 mx-auto h-[200px] flex-wrap lg:flex'>
                <div className='flex-1'>
                    <img src="https://media.istockphoto.com/id/1264797623/photo/new-business-advice.jpg?s=1024x1024&w=is&k=20&c=NMLhXpSYcQ7rRZkD4NH5a2WcmpmLDrNBdH_EhRvpC1Q=" alt="" />
                </div>
                <div className='flex-1 bg-blue-gray-900 text-center flex-col justify-center items-center pt-10'>
                    <h4 className='font-bold text-gray-300'>AN EVENING WITH ELIZABETH</h4>
                    <p className='text-gray-500'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...</p>
                    <h1 className='mt-10 text-2xl font-bold text-yellow-300'>01/01/2025</h1>
                </div>
            </div>
        </div>
    );
};

export default NextEvent;