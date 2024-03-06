import Header from "./components/Header.jsx";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";

import Hero from "./components/hero/Hero.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import Benefits from "./components/features/Benefits.jsx";
import Services from "./components/services/Services.jsx";
import Collaboration from "./components/collaboration/Collaboration.jsx";

import './App.css'
import Footer from "./components/Footer.jsx";

//----------------------------------------------

const App = () => {

    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header/>
                <Hero />
                <Benefits />
                <Collaboration />
                <Services />
                <Pricing />
                <Roadmap />
                <Footer />
            </div>

            <ButtonGradient/>
        </>
    );
}

export default App
