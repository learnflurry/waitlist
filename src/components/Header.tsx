import { ReactComponent as FlurryLogo } from "assets/flu-small.svg";
import { useEffect, useState } from "react";

export default function Header() {
    const [isPaddingLarge, setIsPaddingLarge] = useState(true);

    // Scroll Listener
    useEffect(() => {
        const listenScrollEvent = () => {
            const threshold = 10;
            setIsPaddingLarge(
                document.body.scrollTop < threshold &&
                    document.documentElement.scrollTop < threshold
            );
        };

        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    });

    return (
        <nav
            className={`sticky top-0 z-50 w-full backdrop-blur-lg backdrop-filter transition-all duration-300 ease-in-out ${
                isPaddingLarge ? "py-8" : "py-4 shadow"
            }`}
        >
            <div className="container flex flex-row justify-between ">
                <a href="#intro" className="flex flex-row gap-x-3">
                    <FlurryLogo />
                    <h3 className="hidden sm:block">Flurry</h3>
                </a>
                <div className="flex flex-row items-center gap-x-8 sm:gap-x-16">
                    <a href="#about">About</a>
                    <a href="#faq">FAQ</a>
                    <a href="#roadmap">Roadmap</a>
                </div>
            </div>
        </nav>
    );
}
