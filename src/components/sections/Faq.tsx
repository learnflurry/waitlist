import { ReactComponent as DesktopSwirl } from "assets/desktop/swirl-desktop-3.svg";
import { ReactComponent as MobileSwirl } from "assets/mobile/swirl-mobile-4.svg";

export default function FAQ() {
    return (
        <>
            <h2 className="mb-10 text-center">FAQs</h2>
            <div className="container flex flex-row gap-x-20 px-52">
                <QuestionCard
                    title="Why choose Flurry over other apps?"
                    body="We're going to lower the barrier to fluency. Other apps encourage short-term memorization. We promote authentic language acquisition."
                />
                <QuestionCard
                    title="What is being done differently?"
                    body="We use a variety of activities, like playing games and reading stories, to help you get comfortable using the language, just like when you were a child"
                />
                <QuestionCard
                    title="How much is Flurry?"
                    body={[
                        "Free. Forever.",
                        "We will offer a premium plan that will enhance your experience if you choose to support us, but it will by no means be necessary.",
                    ]}
                />
            </div>
            <DesktopSwirl className="mt-[-35%] mb-[-25%] w-full object-fill" />
            {/* <MobileSwirl/> */}
        </>
    );
}

type QuestionCardProps = {
    title: string;
    body: string | string[];
};

function QuestionCard({ title, body }: QuestionCardProps) {
    const bodyArray = Array.isArray(body) ? body : [body];

    return (
        <div className="aspect-square flex-1 rounded-xl bg-nord-black shadow-lg hover:shadow-xl">
            <div
                className={`h-full w-full rounded-xl border-2 border-nord-black bg-white py-3 px-7 text-left transition-transform hover:-translate-y-2`}
            >
                <h4 className="mb-5">{title}</h4>
                {bodyArray.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>
        </div>
    );
}
