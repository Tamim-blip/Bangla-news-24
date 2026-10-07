'use client'
import { signIn, signUp } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

import React from 'react';
import toast from 'react-hot-toast';

const SignUpPage = () => {

    const onSubmit = async (e : React.SubmitEvent<HTMLElement>) => {

        e.preventDefault()

        const formData = new FormData(e.target)

        const userData = Object.fromEntries(formData.entries()) as {name : string, email : string, image : string, password : string}

        const {data, error} = await signUp.email({
            ...userData,
            callbackURL : "/"
        })

        if(data){
            toast.success("Sign Up Successfull")
            redirect('/')
        }

        if(error){
            toast.error(error.message || "Something went wrong"); 
        }

    }
    const HandleGoogleSignUp = async() => {

        await signIn.social({
            provider : "google"
        })
    }

    const HandleGithubSignUp = async () => {

        await signIn.social({
            provider : "github"
        })

    }  
      return (
        <div className='flex flex-col justify-center items-center mt-10'>

            <p className='text-2xl text-red-700 font-bold'>সাইন আপ</p>
           <form onSubmit={onSubmit}>
            <fieldset className="fieldset w-md  rounded-box   p-4">
  

  <label className="label">নাম</label>
  <input name='name' type="text" className="input w-md" placeholder="Name" />

  <label className="label">Image</label>
  <input name='image' type="url" className="input w-md" placeholder="Image" />

  <label className="label">ইমেইল</label>
  <input name='email' type="email" className="input w-md" placeholder="Email" />

  <label className="label">পাসওয়ার্ড</label>
  <input name='password' type="password" className="input w-md" placeholder="Password" />

  <button type='submit' className="btn bg-red-900 text-white mt-4"> সাইন আপ করুন</button>
</fieldset>
           </form>

           <p>or</p>
           <button onClick={HandleGoogleSignUp} className='btn bg-red-900 text-white mt-4'>Sign Up with Google</button>
           <button onClick={HandleGithubSignUp} className='btn bg-red-900 text-white mt-4'>Sign Up with GitHub</button>
            
        </div>
    );
};

export default SignUpPage;