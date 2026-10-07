'use client'

import { signOut, useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UserData = () => {

    const { data: session } = useSession()
    return (
        <div>
            {
                session?.user ? <>
                    <div className='flex flex-col gap-1 items-center ml-5'>
                        <div className='flex flex-col gap-2 items-center'>

                           <Link href= '\profile'>
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                                    <Image alt="img" src={session.user.image  || '/avatar.png'} width={40} height={40} />
                                </div>
                            </div>
                           </Link>

                            <p className='text-[15px]'>{session.user.name}</p>
                        </div>
                        <button onClick={() => signOut()} className='btn bg-red-700 text-white'>সাইন আউট</button>

                    </div>
                </> : <>
                    <div className='flex gap-2'>
                        <Link href='/sign-in'><button className='btn'>সাইন ইন</button></Link>
                        <Link href='/sign-up'> <button className='btn bg-red-900 text-white'>সাইন আপ</button></Link>

                    </div>

                </>
            }
        </div>
    );
};

export default UserData;