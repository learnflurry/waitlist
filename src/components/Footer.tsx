import { ReactComponent as FlurryLogo } from "assets/flu-small.svg";
import { ReactComponent as DesktopSwirl } from "assets/desktop/footer-swirl-desktop.svg";
import { ReactComponent as MobileSwirl } from "assets/mobile/footer-swirl-mobile.svg";
import Button from "components/Button";
import TextInput from "components/TextInput";
import CTA from "./CTA";

export default function Footer() {
    return (
        <>
            {/* <DesktopSwirl /> */}
            {/* <MobileSwirl /> */}
            <div>
                <h4>Join the waitlist</h4>
                <p>Be the first to know about our release.</p>
            </div>
            <div>
                <CTA />
            </div>
            <div>
                <FlurryLogo />
                <h3>Flurry</h3>
                <p>Reach fluency fast with Flurry.</p>
            </div>
            <div>
                <div>
                    <h5>On this page</h5>
                    <a href="#">Introduction</a>
                    <a href="#">About us</a>
                    <a href="#">FAQs</a>
                    <a href="#">Roadmap</a>
                </div>
                <div>
                    <h5>Get in touch</h5>
                    <a href="#">learn.flurry@gmail.com</a>
                    <a href="#">github.com/learnflurry</a>
                    <a href="#">youtube.com/learnflurry</a>
                    <a href="#">instagram.com/learnflurry</a>
                    <a href="#">twitter.com/learnflurry</a>
                    <a href="#">facebook.com/learnflurry</a>
                </div>
            </div>
        </>
    );
}
