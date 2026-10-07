"use client";

import { updateUser, useSession } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";


const ProfilePage = () => {
  const [update, setUpdate] = useState(false);

  const HandleButton = () => {
    setUpdate(!update)
  }
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    redirect("/");
    
  }

  const { user } = session;


  const HandleUserupdate = async (e : React.SubmitEvent<HTMLElement>) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const newUser = Object.fromEntries(formData.entries())

    await updateUser({
        ...newUser
    })
  }

  return (
   <div className="flex flex-col items-center min-h-[70vh] bg-gray-50 py-12">
     <div className="">
      <div className="max-w-3xl mx-auto px-4">

        <div className="mb-8">
          <p className="text-sm font-semibold text-red-700 uppercase tracking-wider">
            My Account
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mt-1">
            আমার প্রোফাইল
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">

          <div className="h-32 bg-linear-to-r from-red-900 to-red-700" />

          <div className="px-6 pb-8">

            <div className="-mt-16">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name}
                  width={120}
                  height={120}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-red-900 text-white border-4 border-white shadow-lg flex items-center justify-center text-4xl font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            <div className="mt-5">
              <h2 className="text-2xl font-bold text-gray-900">
                {user.name}
              </h2>

              <p className="text-gray-500 mt-1">
                {user.email}
              </p>
               <button onClick={HandleButton} className="btn mt-2">Update Profile</button>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-8">

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="text-sm text-gray-500">নাম</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">
                  {user.name}
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="text-sm text-gray-500">ইমেইল</p>
                <p className="text-lg font-semibold text-gray-900 mt-1 break-all">
                  {user.email}
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  Email Verification
                </p>

                <p
                  className={`text-lg font-semibold mt-1 ${
                    user.emailVerified
                      ? "text-green-600"
                      : "text-orange-600"
                  }`}
                >
                  {user.emailVerified ? "✓ Verified" : "⚠ Not Verified"}
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="text-sm text-gray-500">Account</p>

                <p className="text-lg font-semibold text-green-600 mt-1">
                  Active
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>


       <div>
        {
            update && <>
             <form onSubmit={HandleUserupdate}>
            <fieldset className="fieldset w-md  rounded-box   p-4">
  

  <label className="label">নাম</label>
  <input name='name' type="text" className="input w-md" placeholder="Name" />

  <label className="label">Image</label>
  <input name='image' type="url" className="input w-md" placeholder="Image" />

  <button type='submit' className="btn bg-red-900 text-white mt-4">Update</button>
</fieldset>
           </form>
            </>
        }
       </div>
   </div>
   
  );
};

export default ProfilePage;