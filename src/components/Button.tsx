type Props = { label: string; onClick?: React.MouseEventHandler };

export default function Button({ label, onClick }: Props) {
    return (
        <div className="rounded-lg bg-nord-black shadow-lg transition-shadow hover:shadow-xl">
            <button
                className="h-full min-h-fit w-full min-w-fit rounded-lg border-2 border-nord-black bg-nord-purple-500 py-2 px-12 text-center text-xl font-black text-nord-white shadow-lg transition-transform hover:-translate-y-2"
                type="submit"
                onClick={onClick}
            >
                {label}
            </button>
        </div>
    );
}
