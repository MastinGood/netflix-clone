import { CheckIcon } from "@heroicons/react/24/solid"
import Table from "./Table"
import { Product } from "@stripe/firestore-stripe-payments"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import useAuth from "../hooks/useAuth"
import Loader from "./Loader"
import { loadCheckout } from "../lib/stripe"

interface Props {
    products: Product[]
}

function Plans({products}: Props) {
    const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[3])
    const [isBillingLoading, setIsBillingLoading] = useState(false)
    const { logout, user } = useAuth()
    console.log(products)
    const subscribeToPlan = () => {
        if(!user) return
        loadCheckout(selectedPlan?.prices[0].id!)
        setIsBillingLoading(true)
    }
  return (
    <div>
        <Head>
          <title>Netflix</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="border-b  border-white/10 bg-[#141414] py-2">
            <Link href={"/"}>
                <img src="https://about.netflix.com/images/logo.png"  
                className="cursor-pointer object-contain h-[3.2rem] md:h-[4rem]"
            />
            </Link>
            <button onClick={logout} className="text-sm md:text-lg font-medium hover:underline text-white">
                Sign Out
            </button>
        </header>
        <main className="mx-auto max-w-5xl px-5 pt-16 md:pt-24 pb-12 transition-all md:px-10">
            <h1 className="mb-3 text-3xl lg:text-4xl font-medium mt-8">
            Choose the plan that's right for you
            </h1>
            <ul>
            <li className="flex items-center gap-x-2 text-lg">
                <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
                Ad-free.
            </li>
            <li className="flex items-center gap-x-2 text-lg">
                <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
                just for you.
            </li>
            <li className="flex items-center gap-x-2 text-lg">
                <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
                your plan anytime.
            </li>
            </ul>

            <div className="mt-4 flex flex-col space-y-6">
                <div className="flex w-full items-center justify-end self-end md:w-2/3">
                    {products.map((product) => (
                    <div
                        className={`planBox ${
                        selectedPlan?.id === product.id ? 'opacity-100' : 'opacity-60'
                        }`}
                        key={product.id}
                        onClick={() => setSelectedPlan(product)}
                    >
                        <p className="text-sm md:text-base">{product.name}</p>
                    </div>
                    ))}
                </div>

            <Table products={products} selectedPlan={selectedPlan} />

            <button
                disabled={!selectedPlan || isBillingLoading}
                className={`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${
                isBillingLoading && 'opacity-60'
                }`}
                onClick={subscribeToPlan}
            >
                {isBillingLoading ? (
                <Loader color="dark:fill-gray-300" />
                ) : (
                'Subscribe'
                )}
          </button>
          </div>
        </main>
    </div>
  )
}

export default Plans