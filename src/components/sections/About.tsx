import { ReactComponent as DesktopFlu } from "assets/desktop/about-flu-desktop.svg";
import { ReactComponent as MobileFlu } from "assets/mobile/about-flu-mobile.svg";

export default function About() {
    return (
        <>
            <div
                id="about"
                className="container mt-40 flex flex-col justify-between gap-x-12 xl:flex-row"
            >
                <div className="mb-10">
                    <DesktopFlu className="hidden w-80 object-contain xl:block 2xl:w-auto" />
                    <MobileFlu className="mx-auto object-contain xl:hidden" />
                </div>

                <div>
                    <h2 className="mb-5">About Flurry</h2>
                    <p className="mb-10">
                        Flurry is the product of a team of language enthusiasts
                        who spent weeks researching the most effective teaching
                        methods and months testing countless other free apps.
                    </p>
                    <h4 className="mb-5">Here's what we found</h4>
                    <div className="mb-10 flex flex-col gap-8 md:-mx-4 md:flex-row">
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
            <div className="bg-about-desktop bg-cover bg-center bg-no-repeat pt-20 pb-10 sm:bg-about-desktop sm:pt-64 sm:pb-48 2xl:pt-96 2xl:pb-64">
                <h5 className="container text-center">
                    We hope you'll join us on this journey to fluency and enjoy
                    the natural, immersive language learning experience that
                    Flurry offers.
                </h5>
            </div>
        </>
    );
}

type InfoCardProps = {
    title: string;
    body: string;
};

function InfoCard({ title, body }: InfoCardProps) {
    return (
        <div className="flex-1 rounded-xl bg-nord-black shadow-lg transition-shadow hover:shadow-xl md:aspect-square">
            <div className="h-full min-h-fit w-full min-w-fit rounded-xl border-2 border-nord-black bg-white py-3 px-7 text-center transition-transform hover:-translate-y-2">
                <h4 className="mb-5">{title}</h4>
                <p>{body}</p>
            </div>
        </div>
    );
}
