import Image from "next/image";
import Link from "next/link";

interface Props {
    paragraphText: string;
    imageSrc: string;
    primaryImageLocation: boolean;
    offColored: boolean;
    horizontalOrientation: boolean;
    moreInfoLink: string;
    moreInfoText: string;
}

const PageRow: React.FC<Props> = ({ paragraphText, imageSrc, primaryImageLocation, offColored, horizontalOrientation, moreInfoLink, moreInfoText }) => {
    return (
        <div className={`flex flex-col md:flex-${horizontalOrientation ? 'row' : 'col'}  bg-${offColored ? 'white' : ''} items-center`}>

            <div className={` md:${primaryImageLocation ? '' : 'hidden'} p-4`}>
                <Image className="rounded-3xl" src={imageSrc} width={440} height={100} alt="" />
            </div>

            <div className="flex flex-col items-center justify-between flex-grow gap-5">
                <Link className={`${(moreInfoLink != '') ? '' : 'hidden'} bg-red-400 text-white font-bold rounded hover:bg-red-100 transition-all p-3`} href={moreInfoLink}>{moreInfoText}</Link>

                <p className="italic max-w-lg mx-auto text-center text-2xl">
                    {paragraphText}
                </p>
            </div>
            <div className={`${primaryImageLocation ? 'hidden' : ''} p-4`}>
                <Image className="rounded-3xl" src={imageSrc} width={440} height={100} alt="" />
            </div>

        </div>
    )
}

export default PageRow;