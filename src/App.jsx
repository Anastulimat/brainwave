import Header from "./components/Header.jsx";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";

import './App.css'
import Hero from "./components/Hero.jsx";

//----------------------------------------------

const App = () => {

    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header/>
                <Hero />
            </div>

            <ButtonGradient/>
        </>
    );
}

export default App
