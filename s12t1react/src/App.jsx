import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Router>
      <div>
      <Header />
      <Main />
      <Footer />
      </div>
      </Router>
    </>
  )
}

export default App
