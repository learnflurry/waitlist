import { useState } from "react";

type Props = {
    label: string;
    placeholder: string;
    onTextUpdate: (input: string) => void;
};

export default function TextInput({ label, placeholder, onTextUpdate }: Props) {
    const [hasText, setHasText] = useState(false);

    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setHasText(value.length > 0);
        onTextUpdate(value);
    };

    return (
        <div className="flex w-full flex-row items-baseline overflow-hidden rounded-lg border-2 border-nord-black bg-nord-white px-4 py-2 shadow-lg transition-colors duration-200 ease-in-out focus-within:border-nord-purple-500">
            <input
                type="text"
                className="placeholder-nord-gray w-full appearance-none rounded font-bold text-nord-black focus:outline-none"
                placeholder={placeholder}
                onChange={handleTextInput}
            />
            <label
                className={`transition-olabelacity text-sm font-bold duration-200 ease-in-out ${
                    hasText ? "opacity-50" : "opacity-0"
                }`}
            >
                {label}
            </label>
        </div>
    );
}
