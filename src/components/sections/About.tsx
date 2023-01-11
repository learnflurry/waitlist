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
            <div className="container flex flex-row gap-x-24">
                <div className="flex w-[115%] flex-col items-center justify-center">
                    <DesktopFluLarge className="w-fit self-end" />
                    <DesktopFluMedium className="w-fit self-start" />
                    <DesktopFluSmall className="w-fit" />
                </div>
                <div className="">
                    <h2 className="mb-5">About Flurry</h2>
                    <p className="mb-10">
                        Flurry is the product of a team of language enthusiasts
                        who spent weeks researching the most effective teaching
                        methods and months testing countless other free apps.
                    </p>
                    <h4 className="mb-5">Here's what we found</h4>
                    <div className="-mx-4 mb-10 flex flex-row gap-x-8">
                        <InfoCard
                            title="❶"
                            body="Children are language learning experts"
                        />
                        <InfoCard
                            title="❷"
                            body="Most apps teach with memorization and flashcards disguised as games"
                        />
                        <InfoCard
                            title="❸"
                            body="Children don't use flashcards"
                        />
                    </div>
                    <p className="mb-5">
                        So, we learned from the experts, and now we are applying
                        the principles of Stephen Krashen's Theory of Second
                        Language Acquisition.
                    </p>
                    <p className="mb-5">
                        In addition to these guiding principles, we also
                        discovered that many serious language learners
                        supplement the shortcomings of one app with a handful of
                        others. We aim to unify the language learning landscape
                        into one app with plenty of ways to practice at all
                        levels.
                    </p>
                </div>
            </div>
            <div className="relative my-32">
                <DesktopSwirl className="absolute top-1/2 -z-10 w-full -translate-y-1/2 object-fill" />
                {/* <MobileSwirl /> */}
                <h5 className="pt-20 text-center">
                    We hope you'll join us on this journey to fluency and enjoy
                    the natural, immersive language learning experience that
                    Flurry offers.
                </h5>
            </div>
        </>
    );
}

type CardProps = {
    title: string;
    body: string | string[];
};

function InfoCard({ title, body }: CardProps) {
    return (
        <div className="aspect-square flex-1 rounded-xl bg-nord-black shadow-lg hover:shadow-xl">
            <div className="h-full w-full rounded-xl border-2 border-nord-black bg-white p-3 text-center transition-transform hover:-translate-y-2">
                <h4 className="mb-2">{title}</h4>
                <p>{body}</p>
            </div>
        </div>
    );
}
