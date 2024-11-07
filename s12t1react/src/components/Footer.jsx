export const Footer = () => {
    return (
        <footer className="border-t-2 border-black flex  justify-between px-10 font-sans bg-slate-100 text-xs mt-auto dark:bg-gray-900">
            
                <section className="p-3">
                    <h2 className="text-lg">İletişim Bilgileri</h2>
                    <address>
                        <p>Adres: Soğanlık Yani Mah. Atatürk Cad. No:22/10, İstanbul</p>
                        <p>Telefon: (507) 801-9461</p>
                        <p>E-posta: aatakankurnaz@gmail.com</p>
                    </address>
                </section>

                <section className="p-3 flex flex-col">
                    <h2 className="text-lg">Hızlı Erişim</h2>
                    <ul className="flex flex-col gap-2 items-start p-0">
                        <li><a href="/about" className="text-inherit no-underline hover:text-blue-600 hover:underline">Hakkımda</a></li>
                        <li><a href="/contact" className="text-inherit no-underline hover:text-blue-600 hover:underline">İletişim</a></li>
                    </ul>
                </section>

                <section className="p-3">
                    <h2 className="text-lg">Sosyal Medya</h2>
                    <ul className="flex flex-col gap-2 items-start p-0">
                        <li><a href="https://twitter.com" className="text-inherit no-underline hover:text-blue-600 hover:underline">Twitter</a></li>
                        <li><a href="https://instagram.com" className="text-inherit no-underline hover:text-blue-600 hover:underline">Instagram</a></li>
                    </ul>
                </section>
                
                <p className="flex flex-col justify-center">&copy; 2024 Tüm Hakları Saklıdır.</p>
            

        </footer>
    )
}