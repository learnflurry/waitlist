import Button from "components/Button";
import TextInput from "components/TextInput";
import { ReactComponent as DesktopSwirl } from "assets/desktop/swirl-desktop-1.svg";
import { ReactComponent as MobileSwirlTop } from "assets/mobile/swirl-mobile-1.svg";
import { ReactComponent as MobileSwirlBottom } from "assets/mobile/swirl-mobile-2.svg";

export default function Intro() {
    return (
        <>
            {/* <MobileSwirlTop /> */}
            <h1>Fluency fast.</h1>
            <p>
                At Flurry, we know that memorization and flashcards will never
                lead to fluency, so that's why we are building a platform that
                promotes natural language acquisition—just like how we learned
                our first language.
            </p>
            <p>Join our waitlist and start your journey to fluency today.</p>
            <div>
                <TextInput />
                <Button />
            </div>
            {/* <DesktopSwirl /> */}
            {/* <MobileSwirlBottom /> */}
        </>
    );
}
