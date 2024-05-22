"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const SigninForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/dashboard");
        }
    }, [sessionStatus, router]);

    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill all the fields");
            return;
        }
        if (!isValidEmail(email)) {
            setError("Invalid Email");
            return;
        }
        if (password.length < 6) {
            setError("Invalid password");
            return;
        }
        try {
            const response = await signIn("credentials", {
                email,
                password,
                redirect: false
            });
            if (response?.url)
                router.replace("/dashboard");
        } catch (error) {
            setError("Invalid email or password");
        }
    }

    if (sessionStatus === "loading") {
        return <div>Loading...</div>
    }
    return (
        sessionStatus !== "authenticated" && (
            <div className='flex font-poppins items-center justify-center mx-[14vw] lg:mx-auto dark:bg-gray-900 xl:w-1/3 lg:w-1/2 max-w-screen min-h-screen'>
                <div className="grid gap-8">
                    <div
                        id="back-div"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4 "
                    >
                        <div
                            className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
                        >
                            <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center cursor-default">
                                Sign In
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="mb-2 dark:text-gray-400 text-lg">Email</label>
                                    <input
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
                                    <input
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <button
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                                    type="submit"
                                >
                                    SIGN IN
                                </button>
                            </form>
                            {
                                error && (
                                    <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                                        {error}
                                    </div>
                                )
                            }
                            <div className="flex flex-col mt-4 items-center justify-center text-sm">
                                <h3>
                                    <span className="cursor-default dark:text-gray-300">Don&apos;t have an account?</span>
                                    <Link className="group text-blue-400 transition-all duration-100 ease-in-out" href="/signup">
                                        <span
                                            className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                        >
                                            Sign up
                                        </span>
                                    </Link>
                                </h3>
                            </div>

                            {/* <!-- Third Party Authentication Options --> */}
                            <div
                                id="third-party-auth"
                                className="flex items-center justify-center mt-5 flex-wrap"
                            >
                                <button
                                    onClick={() => signIn("google")}
                                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                >
                                    <FcGoogle size={25} className="max-w-[25px]" />
                                </button>
                                <button
                                    onClick={() => signIn("github")}
                                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                >
                                    <FaGithub size={25} className="max-w-[25px] filter dark:invert" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default SigninForm
