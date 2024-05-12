import TextBox from "../ui/TextBox";

const SupportPage = () => {
    return (
        <main className="flex flex-col font-sans  mt-1 font-black text-blue-900 text-sm md:text-xl">
            <div className={`flex justify-center items-center flex-col mt-1 gap-2 bg-[white] min-h-96 w-full`}>
                <p className='text-4xl text-blue-900'>Engineering Support</p>
                <div className="flex flex-row items-center justify-center gap-3 mt-5">

                    <TextBox text="We know how fast a business can move, and our engineers
                     are always on stand by build new features for you. " header="" />

                    <TextBox text="All updates to the software are included in the monthly fee and
                     will be added with out any additional cost." header="" />

                </div>
            </div>  
            {/* <div className={`flex justify-center items-center flex-col mt-1 gap-2 min-h-96 w-full`}>
                <p className='text-4xl text-red-400'>Support Tiers</p>
                <div className="flex items-center justify-center gap-3 flex-wrap flex-row mt-5">
                    <TextBox text="Receive an engineers support for new features within 5 business day" header="Tier 1 [50$/m]" />
                    <TextBox text="Receive an engineers support for new features within 10 business days" header="Free" />
                </div>
            </div>             */}
        </main>
    )
}

export default SupportPage;