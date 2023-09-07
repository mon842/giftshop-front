"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'


const Login = () => {
    const session = useSession();
    console.log(session);
    if (session.status === "loading") {
        return <p>Loading....</p>
    }
    if (session.status === "authenticated") {
        return (
            <div className='flex justify-center items-center'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                    <p>welcome <span>{session?.data?.user?.name}</span></p>
                    <button onClick={() => signOut("google")}>Logout</button>
                </div>
                
            </div>

        );
    }
    if (session.status === "unauthenticated") {
        return (
            <div className='flex justify-center items-center'>
                <div>
                    <svg className='flex justify-center items-center' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                    <p className='flex text-4xl justify-center items-center'>You are not loggged in</p>
                    <button onClick={() => signIn("google")}>Login with google</button>
                </div>

            </div>)
    }
    return (
        <div>
            <button onClick={() => signIn("google")}>Login with google</button>
        </div>
    )
}

export default Login