import React from 'react';
import { useSelector } from 'react-redux';
import { locales } from '../locales/locales';


export const Main = () => {
  const currentLanguage = useSelector((state) => state.language); 

 
  const getLocalizedText = (key) => {
    return locales[currentLanguage][key]; 
  };

  return (
    <div className="dark:bg-gray-899">
      <main className="flex justify-center my-10">
        <section>
          <img
            src="./ProfilePhoto.JPG"
            alt="FOTO"
            className="rounded-tl-xl rounded-bl-xl max-w-full h-auto"
          />
        </section>
        <section>
          <div className="max-w-2xl mx-auto p-8 bg-white shadow-inner rounded-tr-xl rounded-br-xl dark:!bg-gray-900 dark:shadow-white">
            <blockquote className="text-2xl italic text-gray-700 mb-6 font-serif border-l-4 pl-4 border-blue-500 dark:!text-white">
              &quot;{getLocalizedText('quote')}&quot;
            </blockquote>
            <p className="font-semibold text-xl text-gray-800 dark:!text-white">
              {getLocalizedText('name')}
            </p>
            <p className="font-medium text-lg text-gray-600 dark:!text-white">
              {getLocalizedText('title')}
            </p>

            <button className="mt-8 px-8 py-3 bg-gray-400 text-white font-bold rounded-full hover:bg-gray-700 transition duration-300 transform hover:scale-105">
              {getLocalizedText('buttonText')}
            </button>
          </div>
          <div className="max-w-2xl mx-auto p-8 bg-white shadow-inner rounded-tr-xl rounded-br-xl flex px-5 dark:!bg-gray-900 dark:!text-white dark:shadow-white">
            <div className="flex flex-col gap-2 flex-1 items-center">
              <h2>{getLocalizedText('link1')}</h2>
              <nav className="flex flex-col gap-[21px]">
                <a href="https://github.com/aatakankurnaz">
                  <img src="/github-mark.png" alt="github" className="w-16 h-auto" />
                </a>
                <a href="https://www.linkedin.com/in/atakan-kurnaz-235912174/">
                  <img src="/LI-In-Bug.png" alt="Linkedın" className="w-16 h-auto m-1" />
                </a>
              </nav>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <h2>{getLocalizedText('link2')}</h2>
              <nav className="flex flex-col gap-[10px]">
                <p>{getLocalizedText('project1')}</p>
                <p>{getLocalizedText('project2')}</p>
                <p>{getLocalizedText('project3')}</p>
              </nav>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};
