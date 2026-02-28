import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
