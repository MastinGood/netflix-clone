import Head from "next/head"
import Image from "next/image"
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

interface Input {
    email: string,
    password: string
}

function Login() {
    const [login, setLogin] = useState(false)
    const { signIn, signUp } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Input> = async data => {
        if (login) {
            await signIn(data.email, data.password)
        } else {
            await signUp(data.email, data.password)
        }
    }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
        <Head>
          <title>Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Image src="https://bit.ly/3LRL85i" alt="" fill className="-z-10 !hidden object-cover sm:!inline"/>
        <img src="https://about.netflix.com/images/logo.png" width={150} height={150} className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"/>

        <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-4xl font-semibold">Sign In</h1>
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
          onClick={() => setLogin(true)}
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix?{' '}
          <button
            className="cursor-pointer text-white hover:underline"
            type="submit"
            onClick={() => setLogin(false)}
          >
            Sign up now
          </button>
        </div>
        </form>

    </div>
  )
}

export default Login
