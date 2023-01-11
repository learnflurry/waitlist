import { ReactComponent as FlurryLogo } from "assets/flu-small.svg";
import { ReactComponent as DesktopSwirl } from "assets/desktop/footer-swirl-desktop.svg";
import { ReactComponent as MobileSwirl } from "assets/mobile/footer-swirl-mobile.svg";
import Button from "components/Button";
import TextInput from "components/TextInput";
import CTA from "./CTA";
import { socials } from "data/socials";

export default function Footer() {
    const clipLink = (link: string) => {
        if (link.startsWith("mailto:")) return link.split("mailto:")[1];
        return link.split("://")[1];
    };
    return (
        <>
            <DesktopSwirl className="mb-[-50%] mt-[-30%] w-full object-fill" />
            {/* <MobileSwirl /> */}
            <div className="mt-80 bg-nord-grey">
                <div className="container py-20">
                    <div className="grid grid-cols-2 grid-rows-[min-content_auto] gap-y-20">
                        <div>
                            <h4>Join the waitlist</h4>
                            <p>Be the first to know about our release.</p>
                        </div>
                        <div className="h-fit">
                            <CTA />
                        </div>
                        <div>
                            <div className="mb-5 flex flex-row gap-x-3">
                                <FlurryLogo />
                                <h3>Flurry</h3>
                            </div>
                            <p>Reach fluency fast with Flurry.</p>
                        </div>

                        <div className="flex flex-row gap-x-20">
                            <div className="flex flex-col gap-y-5">
                                <h5>On this page</h5>
                                <a href="#intro">Introduction</a>
                                <a href="#about">About us</a>
                                <a href="#faq">FAQs</a>
                                <a href="#roadmap">Roadmap</a>
                            </div>
                            <div className="flex flex-col gap-y-5">
                                <h5>Get in touch</h5>
                                {socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.link}
                                        className="flex flex-row items-center gap-x-2"
                                    >
                                        <social.icon />
                                        {clipLink(social.link)}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
