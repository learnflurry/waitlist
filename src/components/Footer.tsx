import { ReactComponent as FlurryLogo } from "assets/flu-small.svg";
import CTA from "./CTA";
import { socials } from "data/socials";

export default function Footer() {
    const clipLink = (link: string) => {
        if (link.startsWith("mailto:")) return link.split("mailto:")[1];
        return link.split("://")[1];
    };

    return (
        <>
            <div className="mt-40 -mb-40 h-96 bg-footer bg-cover bg-bottom" />
            <div className="bg-nord-grey">
                <div className="container py-20">
                    <div className="grid grid-cols-1 grid-rows-[min-content_auto] gap-y-20 md:grid-cols-2">
                        <div className="hidden md:block">
                            <h4>Join the waitlist</h4>
                            <p>Be the first to know about our release.</p>
                        </div>
                        <div className="hidden h-fit md:block">
                            <CTA />
                        </div>
                        <div>
                            <div className="mb-5 flex flex-row gap-x-3">
                                <FlurryLogo />
                                <h3>Flurry</h3>
                            </div>
                            <p>Reach fluency fast with Flurry.</p>
                        </div>

                        <div className="flex flex-col gap-20 md:flex-row md:gap-5 lg:gap-20">
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
