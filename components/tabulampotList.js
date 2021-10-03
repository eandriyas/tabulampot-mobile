import Link from "next/link"

export default function TabulampotList({ tabulampotName }) {
    return (
        <>
            <Link href="/tabulampot/detail" className="">
                <a className="flex-auto box-border  h-4/5 rounded-lg mx-2 shadow hover:bg-blue-100 bg-white">
                    <img src="https://source.unsplash.com/user/c_v_r" className="object-cover h-40 w-full rounded-t-lg hover:bg-blue-100" />
                    <h3 className="text-sm px-1 py-2 w-full text-gray-900">{tabulampotName}</h3>
                </a>
            </Link>

        </>
    )
}
