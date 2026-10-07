'use client'

import { signIn } from '@/lib/auth-client';
import React from 'react';
import toast from 'react-hot-toast';

const SignInPage = ( ) => {

    const OnSubmit = async(e : React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

        const formData =  new FormData(e.target)

        const userData =  Object.fromEntries(formData.entries()) as {email : string, password : string}

        const {data, error} = await signIn.email({
            ...userData,
            callbackURL : '/'
        })

        if(data){
            toast.success('Sign In Successfill')
        }

        if(error){
          toast.error(error.message || "Something went wrong");
        }
    }

    const HandleGoogleSignIn = async() => {
        const  data = await signIn.social({
            provider : "google"
        })
    }

    const HandleGithubSignIn = async() => {
        await signIn.social({
            provider : "github"
        })
    }
    return (
        <div className='flex flex-col justify-center items-center mt-10'>

            <p className='text-2xl text-red-700 font-bold'>সাইন ইন</p>
           <form onSubmit={OnSubmit}>
            <fieldset className="fieldset w-md  rounded-box   p-4">

  <label className="label">ইমেইল</label>
  <input name='email' type="email" className="input w-md" placeholder="Email" />

  <label className="label">পাসওয়ার্ড</label>
  <input name='password' type="password" className="input w-md" placeholder="Password" />

  <button type='submit' className="btn bg-red-900 text-white mt-4"> সাইন ইন করুন</button>
</fieldset>
           </form>
            <p>or</p>
           <button onClick={HandleGoogleSignIn} className='btn bg-red-900 text-white mt-4'>Sign In with Google</button>
           <button onClick={HandleGithubSignIn} className='btn bg-red-900 text-white mt-4'>Sign In with GitHub</button>
            
        </div>
    );
};

export default SignInPage;

