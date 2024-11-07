import { ContactForm } from "../components/ContactForm"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen dark:bg-black dark:text-white"> 
        <Header />
        <ContactForm />
        <Footer />
        </div> 
    )
}