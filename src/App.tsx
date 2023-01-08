import Footer from "components/Footer";
import Header from "components/Header";
import About from "components/sections/About";
import Faq from "components/sections/Faq";
import Intro from "components/sections/Intro";
import Roadmap from "components/sections/Roadmap";

function App() {
    return (
        <div>
            <Header />
            <Intro />
            <About />
            <Faq />
            <Roadmap />
            <Footer />
        </div>
    );
}

export default App;
