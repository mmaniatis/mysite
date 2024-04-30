import Link from 'next/link'

const links = [
    {name: "Home", href: "/", icon: null},
    {name: "Contact", href: "/contact", icon: null},
    {name: "About Me", href: "/aboutme", icon: null},
    {name: "Recent Projects", href: "/recentprojects", icon: null},
]
export default function NavBar() {
    return(
        <div className="flex flex-col h-full space-y-0 bg-blue-50">
            {links.map((link) => {
                return <Link 
                    className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" 
                    href={link.href}>
                    {link.name}
                </Link>
            })}
        </div>
    )
}