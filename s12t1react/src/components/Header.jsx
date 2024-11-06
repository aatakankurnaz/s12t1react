import { Link } from "react-router-dom"
import HeaderSwitch from "./HeaderSwitch"

export const Header = () => {
    return (
        <header className="border-b-2 border-black h-[10vh] flex items-center justify-between px-10 font-sans bg-slate-100">
            <nav>
                <ul className="flex gap-20 m-0">
                    <li>
                        <Link to="/" className="no-underline text-black font-mono hover:shadow-lg tracking-wider text-xl  ">
                        Ana Sayfa
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="no-underline text-black font-mono hover:shadow-lg tracking-wider text-xl ">Hakkımda</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="no-underline text-black font-mono hover:shadow-lg tracking-wider text-xl ">İletişim</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-20">
                <HeaderSwitch />
                <div className="flex gap-5">
                    <button id="turkish-btn" aria-label="Switch to Turkish" className="no-underline text-black font-mono hover:shadow-lg tracking-wider ">Türkçe</button>
                    <button id="english-btn" aria-label="Switch to English" className="no-underline text-black font-mono hover:shadow-lg tracking-wider ">English</button>
                </div>
            </div>
        </header>
    )
}