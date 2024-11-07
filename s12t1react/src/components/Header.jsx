import { Link } from "react-router-dom"
import HeaderSwitch from "./HeaderSwitch"

export const Header = () => {

   
    return (
        <header className="border-b-2 border-black h-[10vh] flex items-center justify-between px-10 font-sans bg-slate-100 dark:bg-gray-900 dark:!text-white">
            <nav>
                <ul className="flex gap-20 m-0">
                    <li>
                        <Link to="/" className="no-underline text-black font-mono hover:shadow-lg tracking-wider text-xl p-2 hover:rounded-lg dark:!text-white ">
                        Ana Sayfa
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="no-underline text-black font-mono hover:shadow-lg tracking-wider text-xl p-2  hover:rounded-lg dark:!text-white">Hakkımda</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="no-underline text-black font-mono hover:shadow-lg tracking-wider text-xl p-2  hover:rounded-lg dark:!text-white">İletişim</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-20">
                <HeaderSwitch />
                <div className="flex gap-5">
                    <button id="turkish-btn" aria-label="Switch to Turkish" className="no-underline text-black font-mono hover:shadow-lg tracking-wider p-2 hover:rounded-lg dark:!text-white">Türkçe</button>
                    <button id="english-btn" aria-label="Switch to English" className="no-underline text-black font-mono hover:shadow-lg tracking-wider p-2 hover:rounded-lg dark:!text-white">English</button>
                </div>
            </div>
        </header>
    )
}
