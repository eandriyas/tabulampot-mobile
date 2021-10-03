import Link from 'next/link';

export default function Navigation() {
    const menu = [
        {
            name: "Home",
            icon: "H",
            href: "/"
        },
        {
            name: "Tabulampot",
            icon: "T",
            href: "/tabulampot"
        },
        {
            name: "Tambah",
            icon: "T",
            href: "/tambah"
        },
        {
            name: "Activity",
            icon: "A",
            href: "/activity"
        },
        {
            name: "Profile",
            icon: "P",
            href: "/profile"
        },
    ]

    return (
        <nav className="bottom-0 w-full bg-menu-bottom bg-green-600 text-xs shadow">
            <ul className="flex justify-around items-center text-white text-center opacity-75 text-lg font-bold">
                {menu.map(({ name, icon, href }) => (
                    <li className="p-2 hover:bg-gray-500" key={name}>
                        <Link href={href}>
                            <a className="text-white p-8">
                                <span>{icon}</span>

                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}