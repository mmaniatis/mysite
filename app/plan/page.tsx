import TextBox from "../ui/TextBox";
import Image from "next/image";

const PlanPage: React.FC = () => {
    return (
        <main className="flex p-2 flex-col font-sans  mt-1 font-black text-blue-900 text-sm md:text-xl">
            <div className={`flex justify-center items-center flex-col mt-1 gap-2 bg-[white] min-h-96 w-full`}>
                <p className='text-4xl text-blue-900'>Understand</p>
                <div className="flex flex-row items-center justify-center">
                    <p className="w-1/2 text-lg p-4">
                        Our Engineers are experts at understanding problems and specifications. We gaurentee
                        to get it right the first time.
                    </p>
                    <Image src="/post-it.png" alt="" width={242} height={242} />
                </div>
            </div>
            <div className={`flex justify-center items-center flex-col gap-2 min-h-96 w-full`}>
                <p className='text-4xl text-blue-900'>Plan</p>
                <div className="flex flex-row items-center justify-center gap-5">
                    <Image src="/planning-development.jpg" alt="" width={400} height={400} className="rounded-lg"/>

                    <p className="w-1/2 text-lg p-4">
                        Sit back and relax while we engineer a customized development and support plan
                        for your business.
                    </p>
                </div>
            </div>
            <div className={`flex justify-center items-center flex-col gap-2 bg-[white] min-h-96 w-full`}>
                <p className='text-4xl text-blue-900'>Communicate</p>
                <div className="flex flex-row items-center justify-center gap-5">

                    <p className="w-1/2 text-lg p-4">
                        We would never start building anything without laying out the exact plan and getting
                        your approval!
                    </p>
                    <Image src="/communicate-group.jpg" alt="" width={400} height={400} className="rounded-lg"/>

                </div>
            </div>
            <div className={`flex justify-center items-center flex-col gap-2 min-h-96 w-full`}>
                <p className='text-4xl text-blue-900'>Execute</p>

                <div className="flex flex-row items-center justify-center gap-5">
                    <Image src="/chalkboard-plan-horizontal.jpg" alt="" width={400} height={400} className="rounded-lg" />

                    <p className="w-1/2 text-lg p-4">
                        We promise the quickest go-to-market time while not sacrificng any quality.
                        Any software we produce is held to the absolute highest standard.
                    </p>
                </div>
            </div>

            <div className={`flex justify-center bg-white items-center flex-col gap-2 min-h-96 w-full top-0 sticky`}>
                <p className='text-4xl text-blue-900'>Support</p>

                <div className="flex flex-row items-center justify-center gap-5">

                    <p className="w-1/2 text-lg p-4">
                        You choose a support tier that you want. No AI, chat bots, or long wait times. Dial your engineer
                        directly.
                    </p>
                    <Image src="/support-team.jpg" alt="" width={400} height={400} className="rounded-lg"/>

                </div>
            </div>

        </main>
    )
}

export default PlanPage;