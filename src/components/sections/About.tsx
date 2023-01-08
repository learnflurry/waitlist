import { ReactComponent as DesktopSwirl } from "assets/desktop/swirl-desktop-2.svg";
import { ReactComponent as MobileSwirl } from "assets/mobile/swirl-mobile-3.svg";
import { ReactComponent as DesktopFluLarge } from "assets/desktop/about-flu-desktop-1.svg";
import { ReactComponent as DesktopFluMedium } from "assets/desktop/about-flu-desktop-2.svg";
import { ReactComponent as DesktopFluSmall } from "assets/desktop/about-flu-desktop-3.svg";
import { ReactComponent as MobileFluMedium } from "assets/mobile/about-flu-mobile-1.svg";
import { ReactComponent as MobileFluLarge } from "assets/mobile/about-flu-mobile-2.svg";
import { ReactComponent as MobileFluSmall } from "assets/mobile/about-flu-mobile-3.svg";

export default function About() {
    return (
        <>
            <h2>About Flurry</h2>
            <p>
                Flurry is the product of a team of language enthusiasts who
                spent weeks researching the most effective teaching methods and
                months testing countless other free apps.
            </p>
            <h4>Here's what we found</h4>
            <div>
                <h4>❶</h4>
                <p>Children are language learning experts</p>
            </div>
            <div>
                <h4>❷</h4>
                <p>
                    Most apps teach with memorization and flashcards disguised
                    as games
                </p>
            </div>
            <div>
                <h4>❸</h4>
                <p>Children don't use flashcards</p>
            </div>
            <p>
                So, we learned from the experts, and now we are applying the
                principles of Stephen Krashen's Theory of Second Language
                Acquisition.
            </p>
            <p>
                In addition to these guiding principles, we also discovered that
                many serious language learners supplement the shortcomings of
                one app with a handful of others. We aim to unify the language
                learning landscape into one app with plenty of ways to practice
                at all levels.
            </p>
            {/* <DesktopSwirl /> */}
            {/* <MobileSwirl /> */}
            <h5>
                We hope you'll join us on this journey to fluency and enjoy the
                natural, immersive language learning experience that Flurry
                offers.
            </h5>
        </>
    );
}
