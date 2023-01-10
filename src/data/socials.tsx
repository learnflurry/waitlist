import {
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { IconType } from "react-icons/lib/esm/iconBase";

export type Social = {
    link: string;
    icon: IconType;
};

export const socials: Social[] = [
    {
        link: "mailto:learn.flurry@gmail.com",
        icon: FaEnvelope,
    },
    {
        link: "https://github.com/learnflurry",
        icon: FaGithub,
    },
    {
        link: "https://youtube.com/learnflurry",
        icon: FaYoutube,
    },
    {
        link: "https://instagram.com/learnflurry",
        icon: FaInstagram,
    },
    {
        link: "https://twitter.com/learnflurry",
        icon: FaTwitter,
    },
    {
        link: "https://facebook.com/learnflurry",
        icon: FaFacebook,
    },
];
