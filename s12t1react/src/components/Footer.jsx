import {useSelector} from "react-redux"
import { locales } from "../locales/locales";

export const Footer = () => {
    const currentLanguage = useSelector((state) => state.language); 

 
  const getLocalizedText = (key) => {
    return locales[currentLanguage][key]; 
  };

    return (
        <div className="dark:!bg-gray-900 mt-auto">
        <footer className="border-t-2 border-black flex justify-between px-10 font-sans bg-slate-100 text-xs  dark:bg-gray-900 dark:!border-white">
            
                <section className="p-3">
                    <h2 className="text-lg">{getLocalizedText("ftcontacth")}</h2>
                    <address>
                        <p>{getLocalizedText("address")}: Soğanlık Yani Mah. Atatürk Cad. No:22/10, İstanbul</p>
                        <p>{getLocalizedText("phone")}: (507) 801-9461</p>
                        <p>{getLocalizedText("email")}: aatakankurnaz@gmail.com</p>
                    </address>
                </section>

                <section className="p-3 flex flex-col">
                    <h2 className="text-lg">{getLocalizedText("access")}</h2>
                    <ul className="flex flex-col gap-2 items-start p-0">
                        <li><a href="/about" className="text-inherit no-underline hover:text-blue-600 hover:underline">{getLocalizedText("about")}</a></li>
                        <li><a href="/contact" className="text-inherit no-underline hover:text-blue-600 hover:underline">{getLocalizedText("contact")}</a></li>
                    </ul>
                </section>

                <section className="p-3">
                    <h2 className="text-lg">{getLocalizedText("social")}</h2>
                    <ul className="flex flex-col gap-2 items-start p-0">
                        <li><a href="https://twitter.com" className="text-inherit no-underline hover:text-blue-600 hover:underline">Twitter</a></li>
                        <li><a href="https://instagram.com" className="text-inherit no-underline hover:text-blue-600 hover:underline">Instagram</a></li>
                    </ul>
                </section>
                
                <p className="flex flex-col justify-center">&copy; 2024 {getLocalizedText("reserve")}.</p>
            

        </footer>
        </div>
    )
}