import { ReactComponent as DesktopSwirl } from "assets/desktop/swirl-desktop-1.svg";
import { ReactComponent as MobileSwirlTop } from "assets/mobile/swirl-mobile-1.svg";
import { ReactComponent as MobileSwirlBottom } from "assets/mobile/swirl-mobile-2.svg";
import CTA from "components/CTA";
import { socials } from "data/socials";

export default function Intro() {
    const getSocials = () =>
        socials.map((social, index) => (
            <a
                key={social.link + " " + index}
                href={social.link}
                className="text-3xl text-nord-dark-grey transition-colors duration-200 ease-in-out hover:text-nord-black"
            >
                <social.icon />
            </a>
        ));

    return (
        <div id="intro" className="min-h-screen">
            {/* <div className="flex h-0 w-full flex-row items-center md:hidden">
                <MobileSwirlTop className="-z-10 mt-48 w-full object-fill" />
            </div> */}

            <div className="container z-10">
                <div className="mt-12 md:mt-24 md:w-7/12 xl:w-5/12 ">
                    <h1 className="mb-10 md:mb-5">Fluency fast.</h1>
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

            <div className="hidden md:block">
                <div className="mt-28 flex h-0 w-full flex-row items-center xl:mt-10">
                    <DesktopSwirl className="-z-10 w-full object-fill" />
                </div>
                <div className="container mt-36 flex flex-row justify-end gap-x-5 xl:mt-64">
                    {getSocials()}
                </div>
            </div>
            {/* <div className="mt-48 flex h-0 w-full flex-row items-center md:hidden">
                <MobileSwirlBottom className="-z-10 w-full object-fill" />
                <div className="absolute left-1/2 flex -translate-x-1/2 flex-row gap-x-5">
                    {getSocials()}
                </div>
            </div> */}
        </div>
    );
}
