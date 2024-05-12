import TextBox from "../ui/TextBox";
import Link from "next/link"
const PricingPage = () => {
    return (
        <main className="flex flex-col font-sans  mt-1 font-black text-blue-900 text-sm md:text-xl">
            <div className={`flex justify-center items-center flex-col mt-1 gap-2 bg-[white] min-h-96 w-full`}>
                <p className='text-4xl text-blue-900 mt-3'>Pricing</p>
                <div className="flex flex-row items-center justify-center gap-3 mt-5">
                    <p className="w-11/12"><span className="font-black text-green-600 text-4xl">0$</span> upfront costs. Pay as you need per month.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-3 mt-5">
                    <p className="text-lg">Check out our promise to hear how we give back to the community!</p>
                    <Link className="bg-red-400 text-white font-bold rounded hover:bg-red-100 transition-all p-2 h-10 items-center justify-center" href="/promise">Our Promise</Link>
                </div>

                <div className="flex flex-row flex-wrap gap-5 p-6 items-center justify-center bg-[#f7faff]">
                    <TextBox header="Renewal / 1m" text="300$ / Month" />
                    <TextBox header="Renewal / 3m" text="200$ / Month" />
                    <TextBox header="Renewal / 6m" text="175$ / Month" />
                    <TextBox header="Renewal / 12m" text="150$ / Month" />
                </div>
            </div>

        </main>
    )
}

export default PricingPage;