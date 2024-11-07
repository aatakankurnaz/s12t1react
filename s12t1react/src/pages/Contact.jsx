import { ContactForm } from "../components/ContactForm"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white"> 
        <Header />
        <ContactForm />
        <Footer />
        </div> 
    )
}