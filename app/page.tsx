import Image from 'next/image';
import Link from 'next/link';
import LandingPageRow from './ui/LandingPageRow';

export default function Home() {
  return (
    <main className="flex flex-col items-stretch font-sans font-black text-blue-900">
      <div className="mt-10">
        <LandingPageRow
          moreInfoText='Contact Us'
          moreInfoLink='/contact'
          paragraphText='You focus on the important and real challenges of running a business.
              We focus on your digital space.'
          imageSrc='/working-at-table.jpg'
          primaryImageLocation={false}
          offColored={true}
          horizontalOrientation={true}
        />

        <LandingPageRow
          moreInfoText='Our Commitment'
          moreInfoLink='/promise'
          paragraphText='U.S.A Based, Never Outsourced, and Always Exceptional.'
          imageSrc='/teamwork.png'
          primaryImageLocation={true}
          offColored={false}
          horizontalOrientation={true}
        />

        <LandingPageRow
          moreInfoText='The Game Plan'
          moreInfoLink='/plan'
          paragraphText='Focus on your business while we execute a plan tailored for your success.'
          imageSrc='/whiteboard-roadmap.jpg'
          primaryImageLocation={false}
          offColored={true}
          horizontalOrientation={false}
        />


        <div className="flex flex-col items-center ">
          <div><h1 className="text-2xl md:text-3xl">Specialties</h1></div>

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
      </div>
    </main>
  );
}
