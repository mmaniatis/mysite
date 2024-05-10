import TextBox from "../ui/TextBox";

const SupportPage = () => {
    return (
        <main className="flex flex-col font-sans  mt-1 font-black text-blue-900 text-sm md:text-xl">
            <div className={`flex justify-center items-center flex-col mt-1 gap-2 bg-[white] min-h-96 w-full`}>
                <p className='text-4xl text-red-400'>Customer Service</p>
                <div className="flex flex-row items-center justify-center gap-3 mt-5">

                    <TextBox text="Every client is given an engineers direct phone number. 
                        No waits, no chat bots, just customer service that makes sense." header="" />

                    <TextBox text="Regardless of your support tier, any issues impacting your business will be 
                        given immediate attention." header="" />

                </div>
            </div>  
            <div className={`flex justify-center items-center flex-col mt-1 gap-2 min-h-96 w-full`}>
                <p className='text-4xl text-red-400'>Support Tiers</p>
                <div className="flex items-center justify-center gap-3 flex-wrap flex-row mt-5">
                    <TextBox text="Receive an engineers support for new features within 3 business day" header="Tier 1 [150$/m]" />
                    <TextBox text="Receive an engineers support for new features within 7 business days" header="Tier 2 [100$/m]" />
                    <TextBox text="Receive an engineers support for new features within 10 business days" header="Tier 3 [50$/m]" />
                    <TextBox text="Receive an engineers support for new features within 20 business days" header="Tier 4 [Base]" />
                </div>
            </div>            
        </main>
    )
}

export default SupportPage;