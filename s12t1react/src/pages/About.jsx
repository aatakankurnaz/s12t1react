import { AboutMain } from "../components/AboutMain"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const About = () => {
    return (
        <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white">
        <Header />
        <AboutMain />
        <Footer />
        </div>   
    )
}