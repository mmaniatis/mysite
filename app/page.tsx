import Image from 'next/image';
import Link from 'next/link';
const proficiencyIcons = [

]

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <div className="top-0 mt-4 mr-4">
        <h1 className="font-mono text-2xl">mikemaniatis.com</h1>
      </div>

      <div className="h-1/3 flex items-center justify-center">
          <p className="font-mono italic max-w-lg mx-auto text-center">
            I have a passion for problem solving, leadership, and delivering quality results 
            in the shortest time possible.
          </p>
      </div>

      <div className="h-screen flex flex-col items-center justify-center">
          <div><h1 className="font-mono text-4xl">Expertise</h1></div>

          <div className="flex flex-wrap justify-center items-end">

            <div className="flex justify-between w-full pl">
              <Image src="/maven.svg" width={52} height={52} className="" alt="" />
              <Image src="/java.svg" width={52} height={52} className="" alt="" />
              <Image src="/spring.svg" width={52} height={52} className="" alt="" />
              <Image src="/cassandra.svg" width={52} height={52} className="" alt="" />
              <Image src="/kafka.svg" width={52} height={52} className="" alt="" />
            </div>

            <div className="flex justify-between w-full pl">
              <Image src="/aws.svg" width={52} height={52} className="" alt="" />
              <Image src="/hadoop.svg" width={52} height={52} className="" alt="" />
              <Image src="/react.svg" width={52} height={52} className="" alt="" />
              <Image src="/next.svg" width={52} height={52} className="" alt="" />
              <Image src="/linux.svg" width={52} height={52} className="" alt="" />
            </div>

            <div className="flex justify-between w-full">
              <Image src="/cloud.svg" width={52} height={52} className="" alt="" />
              <Image src="/cloud-foundry.svg" width={52} height={52} className="" alt="" />
              <Image src="/jenkins.svg" width={52} height={52} className="" alt="" />
              <Image src="/python.svg" width={52} height={52} className="" alt="" />
              <Image src="/tomcat.svg" width={52} height={52} className="" alt="" />
            </div>
          </div>
      </div>
        
    </main>
  );
}
