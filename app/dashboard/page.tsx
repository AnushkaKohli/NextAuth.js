import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-y-4 font-poppins items-center justify-center mx-[14vw] lg:mx-auto dark:bg-gray-900 max-w-screen min-h-screen'>
            <h1 className='text-5xl'>Dashboard</h1>
            <p className='text-lg'>Welcome to the dashboard</p>
            <p className='text-lg'>This is a protected route</p>
            <p className='text-lg'>Username: </p>
            <p className='text-lg'>Email: </p>
        </div>
    )
}

export default page
