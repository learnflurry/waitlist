import Footer from "components/Footer";
import Header from "components/Header";
import About from "components/sections/About";
import FAQ from "components/sections/FAQ";
import Intro from "components/sections/Intro";
import Roadmap from "components/sections/Roadmap";

function App() {
    return (
        <>
            <Header />
            <Intro />
            <About />
            <FAQ />
            <Roadmap />
            <Footer />
        </>
    );
}

export default App;
