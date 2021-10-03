
import Navigation from "./navigation"

export default function Layout({ children, home }) {
    return (
        <>
            <div className="w-full bg-green-500 pb-16">
                <main className="justify-center items-center">
                    {children}
                </main>
                <div className="bottomNav fixed bottom-0 w-full">
                    <Navigation></Navigation>
                </div>
            </div>
        </>
    )
}