import Image from 'next/image';
import Link from 'next/link';
import PageRow from './ui/PageRow';

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-stretch font-sans font-black text-blue-900">
      <div className="mt-10">
        <PageRow
          moreInfoText='Contact Us'
          moreInfoLink='/contact'
          paragraphText='You focus on the important and real challenges of running a business.
              We focus on your digital space.'
          imageSrc='/software-development-1.jpg'
          primaryImageLocation={false}
          offColored={true}
          horizontalOrientation={true}
        />

        <PageRow
          moreInfoText='Our Commitment'
          moreInfoLink='/promise'
          paragraphText='U.S.A Based, Never Outsourced, and Always Exceptional.'
          imageSrc='/teamwork.jpg'
          primaryImageLocation={true}
          offColored={false}
          horizontalOrientation={true}
        />

        <PageRow
          moreInfoText='The Game Plan'
          moreInfoLink='/plan'
          paragraphText='Software Development That Just Makes Sense.'
          imageSrc='/planning-development.jpg'
          primaryImageLocation={false}
          offColored={true}
          horizontalOrientation={false}
        />


        <div className="flex flex-col items-center justify-center">
          <div><h1 className="text-4xl">Technologies</h1></div>

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
