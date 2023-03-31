import Head from "next/head"
import Link from "next/link"
import Loader from "../../components/Loader"
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

interface Input {
    email: string,
    password: string
}

function signup() {
    const { signUp, user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm<Input>();
    const [isLoading, setIsLoading] = useState(false)
    
    const onSubmit: SubmitHandler<Input> = async data => {
        setIsLoading(true)
        await signUp(data.email, data.password)
    }
    
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center">
        <Head>
          Sign Up - Netflix
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="border-white/10 border-b py-2">
            <div className="flex items-center space-x-2 md:space-x-10">
                <img src="https://about.netflix.com/images/logo.png" width={100} height={100} className="cursor-pointer object-contain"
                />
            </div> 

            <div className="flex items-center space-x-4 text-sm font-light">
                <Link href={"/login"} className="font-medium text-md">
                {user ? "Sign Out" : "Sign in"}  
                </Link>     
            </div>
        </header>
    
    <form className="relative mt-16 md:20 space-y-6 rounded bg-black/75 py-8 px-8 md:mt-0 md:max-w-lg md:px-14" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl md:text-4xl font-semibold">Create a account to start your membership</h1>
        <div className="description">
            <p className="font-light text-base md:text-lg">Just a few more steps and you're done!</p>
            <p className="font-light text-base md:text-lg">We hate paperwork, too.</p>
        </div>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register('email', {required: true})}
            />
            {errors.email && <p className="p-1 font-light text-sm text-orange-500">This field is required</p>}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register('password', {required: true})}
              />
              {errors.password && <p className="p-1 font-light text-sm text-orange-500">This field is required</p>}
          </label>
        </div>
        <button
          className="w-full rounded bg-[#E50914] py-3 font-semibold"
          type="submit"
        >
           { isLoading ? <Loader color="dark:fill-[#ffffff]" /> : "Sign Up" }
          
        </button>
            <div className="text-[gray] cursor-pointer text-sm md:text-base">
             Forgot your password?          
            </div>
        </form>
    </div>
  )
}

export default signup

