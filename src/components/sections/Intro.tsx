import { ReactComponent as DesktopSwirl } from "assets/desktop/swirl-desktop-1.svg";
import { ReactComponent as MobileSwirlTop } from "assets/mobile/swirl-mobile-1.svg";
import { ReactComponent as MobileSwirlBottom } from "assets/mobile/swirl-mobile-2.svg";
import CTA from "components/CTA";
import { socials } from "data/socials";

export default function Intro() {
    return (
        <div id="intro" className="min-h-screen">
            {/* <MobileSwirlTop className="md:hidden object-fill w-full" /> */}
            <div className="container z-10">
                <div className="mt-24 w-5/12">
                    <h1 className="mb-5">Fluency fast.</h1>
                    <p className="mb-10">
                        At Flurry, we know that memorization and flashcards will
                        never lead to fluency, so that's why we are building a
                        platform that promotes natural language acquisition—just
                        like how we learned our first language.
                    </p>
                    <p className="mb-5">
                        Join our waitlist and start your journey to fluency
                        today.
                    </p>
                    <CTA />
                </div>
            </div>
            <div className="flex h-32 w-full flex-row items-center">
                <DesktopSwirl className="-z-10 w-full object-fill" />
            </div>
            {/* <MobileSwirlBottom className="md:hidden object-fill w-full" /> */}
            <div className="container mt-52 flex flex-row justify-end gap-x-5">
                {socials.map((social, index) => (
                    <a
                        key={social.link + " " + index}
                        href={social.link}
                        className="text-3xl text-nord-grey transition-colors duration-200 ease-in-out hover:text-nord-black"
                    >
                        <social.icon />
                    </a>
                ))}
            </div>
        </div>
    );
}
