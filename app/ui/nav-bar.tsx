import Link from 'next/link'
import Image from 'next/image';

const links = [
    {name: "Home", href: "/", icon: null},
    {name: "Contact", href: "/contact", icon: null},
    {name: "About Me", href: "/aboutme", icon: null},
    // {name: "Recent Projects", href: "/recentprojects", icon: null},
]

export default function NavBar() {
    return(
        <div className="flex flex-col h-full bg-blue-50">
            {links.map((link) => {
                return <Link 
                    className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" 
                    href={link.href}>
                    {link.name}
                </Link>
            })}

            <div className="flex w-full grow items-end justify-center gap-3 ">
                <Link href="https://github.com/mmaniatis"><Image src="/github.svg" width={52} height={52} className="" alt="" /></Link>
                <Link href="https://www.linkedin.com/in/mike-maniatis-2b178bb7/"><Image src="/linkedin.svg" width={52} height={52} className="" alt="" /></Link>
                <a href="mailto:mikejohnmaniatis@gmail.com"><Image src="/email.svg" width={52} height={52} className="" alt="" /></a>
            </div>

        </div>
    )
}