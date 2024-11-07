import { Link } from "react-router-dom"
import HeaderSwitch from "./HeaderSwitch"
import { useDispatch, useSelector } from "react-redux"
import { setLanguage } from "../store/actions";
import { locales } from "../locales/locales";

export const Header = () => {

    const dispatch = useDispatch();
    const currentLanguage = useSelector((state) => state.language)

    const handleLangChange = (language) => {
        dispatch(setLanguage(language));
    }
     

 
  const getLocalizedText = (key) => {
    return locales[currentLanguage][key]; 
  };

    return (
        <header className="border-b-2 border-black h-[10vh] flex items-center justify-between px-10 font-sans bg-slate-100 dark:bg-gray-900 dark:!text-white dark:!border-white">
            <nav>
                <ul className="flex gap-20 m-0">
                    <li>
                        <Link to="/" className="no-underline text-black font-mono hover:shadow-lg tracking-wider text-xl p-2 hover:rounded-lg dark:!text-white ">
                            {getLocalizedText("mainpage")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="no-underline text-black font-mono hover:shadow-lg tracking-wider text-xl p-2  hover:rounded-lg dark:!text-white">{getLocalizedText("about")}</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="no-underline text-black font-mono hover:shadow-lg tracking-wider text-xl p-2  hover:rounded-lg dark:!text-white">{getLocalizedText("contact")}</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-20">
                <HeaderSwitch />
                <div className="flex gap-5">
                    <button id="turkish-btn" aria-label="Switch to Turkish" className="no-underline text-black font-mono hover:shadow-lg tracking-wider p-2 hover:rounded-lg dark:!text-white" 
                    onClick={() => handleLangChange('tr')}>Türkçe</button>
                    <button id="english-btn" aria-label="Switch to English" className="no-underline text-black font-mono hover:shadow-lg tracking-wider p-2 hover:rounded-lg dark:!text-white"
                    onClick={() => handleLangChange('en')}>English</button>
                </div>
            </div>
        </header>
    )
}
