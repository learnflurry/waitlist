type Props = { onClick: React.MouseEventHandler };

export default function Button({ onClick }: Props) {
    return (
        <button
            className={`
                rounded bg-nord-purple-500 py-3 px-12 text-xl font-black text-nord-white shadow-lg outline-nord-black transition-colors duration-200 ease-in-out
                hover:bg-nord-purple-550
                focus:outline-2 
                `}
            type="button"
            onClick={onClick}
        >
            Join
        </button>
    );
}
