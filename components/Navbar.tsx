import React from 'react'
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="bg-gray-100 font-sans w-full m-0">
            <div className="bg-white shadow">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <div>
                            <Link href="/">
                                <p className='w-10 h-10 text-purple-600'>Logo</p>
                            </Link>
                        </div>

                        <div className="hidden sm:flex sm:items-center">
                            <Link href="/">
                                <p className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Home</p>
                            </Link>
                            <Link href="/dashboard">
                                <p className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Dashboard</p>
                            </Link>
                        </div>

                        <div className="hidden sm:flex sm:items-center">
                            <Link href="/signin">
                                <p className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Sign in</p>
                            </Link>
                            <Link href="/signup">
                                <p className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600">Sign up</p>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile view */}
                    <div className="block sm:hidden bg-white border-t-2 py-2">
                        <div className="flex flex-col">
                            <Link href="/">
                                <p className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Home</p>
                            </Link>
                            <Link href="/dashboard">
                                <p className="text-gray-800 text-sm font-semibold pb-2 hover:text-purple-600 mr-4">Dashboard</p>
                            </Link>
                            <div className="flex justify-between items-center border-t-2 pt-2">
                                <Link href="/signin">
                                    <p className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Sign in</p>
                                </Link>
                                <Link href="/signup">
                                    <p className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600">Sign up</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
