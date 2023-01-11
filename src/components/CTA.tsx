import { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";

export default function CTA() {
    const [email, setEmail] = useState("");

    const handleTextInput = (input: string) => {
        setEmail(input);
    };

    const handleSubmitEmail = () => {
        // Validate
        const isValid = email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

        // Error        if (!isValid) return;

        // Send to Firebase
        alert("Submitted " + email);

        // Show feedback
    };

    return (
        <div className="flex w-full flex-col justify-between gap-5 sm:flex-row">
            <TextInput
                label="Email"
                placeholder="Enter an email address"
                onTextUpdate={handleTextInput}
            />
            <Button onClick={handleSubmitEmail} />
        </div>
    );
}
