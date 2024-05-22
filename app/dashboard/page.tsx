import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '../api/auth/[...nextauth]/route';

const page = async () => {
    const session = await getServerSession(authOptions) as { user: { name: string, email: string } };
    console.log("Session from server: ", session)
    if (!session) {
        redirect('/');
    }
    return (
        <div className='flex flex-col gap-y-4 font-poppins items-center justify-center mx-[14vw] lg:mx-auto dark:bg-gray-900 max-w-screen min-h-screen'>
            <h1 className='text-5xl'>Dashboard</h1>
            <p className='text-lg'>Welcome to the dashboard</p>
            <p className='text-lg'>This is a protected route</p>
            <p className='text-lg'>Username: {session.user?.name} </p>
            <p className='text-lg'>Email: {session.user?.email} </p>
        </div>
    )
}

export default page
