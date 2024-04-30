import Image from "next/image";

const proficiencyIcons = [

]

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
        <div className="h-1/3 flex items-center justify-center">
          <h1 className="text-50xl">Michael Maniatis</h1>
        </div>

        <div className="h-1/3 flex items-center justify-center">
            <p className="max-w-md mx-auto text-center">
              Just as software is a tool to enhance ourselves, the mechanisms which we use
              to create that software is simply a tool. I pride myself on adapating to new 
              technology, and finding solutions to the tough problems using the best options 
              at hand.
            </p>
        </div>

        <div className="h-1/3 flex flex-col items-center justify-center">
            <div><h1 className="text-2xl">Expertise</h1></div>

            <div className="flex flex-wrap justify-center">

              <div className="flex justify-center w-full">
                <Image src="/java.svg" width={48} height={48} className="" alt="" />
                <Image src="/spring-boot.svg" width={48} height={48} className="" alt="" />
                <Image src="/react.svg" width={48} height={48} className="" alt="" />
              </div>

              <div className="flex justify-center w-full">
                <Image src="/next.svg" width={48} height={48} className="" alt="" />
                <Image src="/jquery.svg" width={48} height={48} className="" alt="" />
                <Image src="/mysql.svg" width={48} height={48} className="" alt="" />
              </div>
            </div>
        </div>
        
    </main>
  );
}
