import { db } from "api/fire";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";

export default function CTA() {
    const [buttonLabel, setButtonLabel] = useState("Join");
    const [email, setEmail] = useState("");

    const postToDB = async () => {
        // Send to Firebase
        // alert("Submitted " + email);
        const docRef = doc(db, "waitlist", email);
        await setDoc(docRef, { subscribed: true });

        // Show feedback
        setButtonLabel("Join");
    };

    const handleSubmitEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setButtonLabel("...");

        // Validate
        const isValid = email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

        // Error
        if (!isValid) {
            alert("Invalid email");
            setButtonLabel("Join");
            return;
        }

        postToDB();
    };

    return (
        <form
            onSubmit={handleSubmitEmail}
            className="flex w-full flex-col justify-between gap-5 sm:flex-row"
        >
            <TextInput
                label="Email"
                placeholder="Enter an email address"
                onTextUpdate={setEmail}
            />
            <Button label={buttonLabel} />
        </form>
    );
}
