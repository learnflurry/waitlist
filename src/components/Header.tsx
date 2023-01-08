import { ReactComponent as FlurryLogo } from "assets/flu-small.svg";

export default function Header() {
    return (
        <>
            <FlurryLogo />
            <h3>Flurry</h3>
            <a href="#">About</a>
            <a href="#">FAQ</a>
            <a href="#">Roadmap</a>
        </>
    );
}
