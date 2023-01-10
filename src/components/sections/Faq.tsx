import { ReactComponent as DesktopSwirl } from "assets/desktop/swirl-desktop-3.svg";
import { ReactComponent as MobileSwirl } from "assets/mobile/swirl-mobile-4.svg";

export default function FAQ() {
    return (
        <>
            <h2>FAQs</h2>
            <div>
                <h4>Why choose Flurry over other apps?</h4>
                <p>
                    We're going to lower the barrier to fluency. Other apps
                    encourage short-term memorization. We promote authentic
                    language acquisition.
                </p>
            </div>
            <div>
                <h4>What is being done differently?</h4>
                <p>
                    We use a variety of activities, like playing games and
                    reading stories, to help you get comfortable using the
                    language, just like when you were a child
                </p>
            </div>
            <div>
                <h4>How much is Flurry?</h4>
                <p>
                    Free. Forever.
                    <br />
                    We will offer a premium plan that will enhance your
                    experience if you choose to support us, but it will by no
                    means be necessary.
                </p>
            </div>
            {/* <DesktopSwirl/> */}
            {/* <MobileSwirl/> */}
        </>
    );
}
