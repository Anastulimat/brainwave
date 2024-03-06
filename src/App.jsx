import Header from "./components/Header.jsx";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";

import Hero from "./components/hero/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Collaboration from "./components/Collaboration.jsx";

import './App.css'

//----------------------------------------------

const App = () => {

    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header/>
                <Hero />
                <Benefits />
                <Collaboration />
            </div>

            <ButtonGradient/>
        </>
    );
}

export default App
