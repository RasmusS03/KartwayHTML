import Home from "./pages/Home.jsx";
import Om from "./pages/Om.jsx";
import Profil from "./pages/Profil.jsx";
import Statistik from "./pages/Statistik.jsx";
import Bokning from "./pages/Bokning.jsx";

import Header from "./components/Header.jsx";

import './App.css'
import Footer from "./components/Footer.jsx";


function App() {
  return(
      <div>
          <Header />
          <Home />
          <Om />
          <Profil />
          <Statistik />
          <Bokning />
          <Footer />
     </div>
  )
}

export default App
