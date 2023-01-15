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
        <div
            id="intro"
            className={`flex min-h-[calc(100vh-103px)] flex-col justify-between gap-y-8 bg-cover bg-bottom md:bg-intro-desktop`}
        >
            <div className="z-10 bg-intro-mobile-top bg-contain bg-top bg-no-repeat sm:bg-cover md:bg-none">
                <div className="container pt-[10vh] md:pt-[10vh]">
                    <div className="md:w-7/12 xl:w-5/12">
                        <h1 className="mb-10 md:mb-5">Fluency fast.</h1>
                        <p className="mb-10">
                            At Flurry, we know that memorization and flashcards
                            will never lead to fluency, so that's why we are
                            building a platform that promotes natural language
                            acquisition—just like how we learned our first
                            language.
                        </p>
                        <p className="mb-5">
                            Join our waitlist and start your journey to fluency
                            today.
                        </p>
                        <CTA />
                    </div>
                </div>
            </div>

            <div className="flex flex-grow flex-col justify-center bg-intro-mobile-bottom bg-cover bg-center bg-no-repeat pt-16 pb-10 sm:pt-20 sm:pb-14 md:justify-end md:bg-none">
                <div className="container mb-8 flex flex-row justify-between px-4 sm:justify-center sm:gap-x-6 md:justify-end">
                    {getSocials()}
                </div>
            </div>
        </div>
    );
}
