export default function FAQ() {
    return (
        <>
            <h2 id="faq" className="mb-10 text-center">
                FAQs
            </h2>
            <div className="container flex flex-col gap-y-10 gap-x-5 lg:flex-row xl:gap-x-20 2xl:px-52">
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
            <div className="mb-10 h-[40rem] bg-faq-mobile bg-cover bg-center bg-no-repeat md:h-[30rem] md:bg-faq-desktop lg:-mt-64 lg:h-[60rem] 2xl:h-[70rem]" />
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
        <div className="flex-1 rounded-xl bg-nord-black shadow-lg hover:shadow-xl xl:aspect-square">
            <div className="h-full min-h-fit w-full min-w-fit rounded-xl border-2 border-nord-black bg-white py-3 px-7 text-left transition-transform hover:-translate-y-2">
                <h4 className="mb-5">{title}</h4>
                {bodyArray.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>
        </div>
    );
}
