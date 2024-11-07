import {useSelector} from "react-redux"
import { locales } from "../locales/locales";

export const AboutMain = () => {
    const currentLanguage = useSelector((state) => state.language); 

 
  const getLocalizedText = (key) => {
    return locales[currentLanguage][key]; 
  };
    return (
        <main className="flex flex-col gap-5 pl-10 flex-grow items-center justify-center dark:bg-gray-900">
            <h1 className="font-mono mb-20">{getLocalizedText("about")}</h1>
            <div className="font-serif italic flex flex-col items-center">
                <p>{getLocalizedText("m1")}</p>
                <p>{getLocalizedText("m2")}</p>
                <p>{getLocalizedText("m3")}</p>
                <p>{getLocalizedText("m4")}</p>

                <p>{getLocalizedText("m5")}</p>
                <p>{getLocalizedText("m6")}</p>
                <p>{getLocalizedText("m7")}</p>
                <p>{getLocalizedText("m8")}</p>
            </div>
        </main>
    )
}