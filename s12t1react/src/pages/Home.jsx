import { Header } from "../components/Header"
import {Main} from "../components/Main"
import {Footer} from "../components/Footer"

export function Home() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white">
      <Header />
      <Main />
      <Footer />
      </div>
  )
}

export default Home
